"""
make_index.py

Read data and metadata from a markdown file to generate index page.
"""
import sys
import textwrap
import markdown


USAGE1 = "\nUSAGE: python make_index.py [-h] [-r]\n\n"
USAGE2 = (
    "Reads and parses `index.markdown` and writes to _index.html."
    "If -h is passed, then outputs usage and exits. "
    "If -r is passed, then writes to index.html (and overwrites it if present). "
    "This should be called with `index_template.html` in parent directory."
)


def usage():
    """
    Print usage.
    """
    usagestring = USAGE1 + "\n".join(
        textwrap.wrap(USAGE2, replace_whitespace=False, drop_whitespace=False)
    )
    print(usagestring)


def index_template():
    """
    Return a string representing the template for index.html.
    """
    with open("../index_template.html", "r") as inputfile:
        template = inputfile.read()
    return template


def extract_yaml_header(lines):
    """
    Returns the header info and remaining lines from the lines of a
    markdown-with-yaml file.
    """
    header = dict()
    lines.pop(0)
    in_header = True
    while in_header:
        line = lines.pop(0)
        if line == "---":
            in_header = False
        key, _, value = line.partition(":")
        key = key.strip()
        value = value.strip()
        key = "__" + key.upper() + "__"
        header[key] = value
    return header, lines


def substitute_header(header, template):
    """
    For each key, val in header, replace `key` with `value` in template.
    """
    for key, val in header.items():
        template = template.replace(key, val)
    return template


def substitute_content(content, template):
    """
    Convert content from markdown to html and insert in template.
    """
    html = markdown.markdown(content)
    result = template.replace("__CONTENT__", html)
    return result


def main():
    """
    Main driver.
    """
    args = sys.argv
    if (len(args) > 1) and (args[1] == "-h"):
        usage()
        sys.exit(0)

    with open("index.markdown", "r") as inputfile:
        lines = inputfile.readlines()
    lines = list(map(lambda x: x.strip(), lines))

    # Make sure first line is non-empty
    first_line_empty = True
    while first_line_empty and lines:
        if not lines[0]:
            lines.pop(0)
        else:
            first_line_empty = False

    header = None
    if lines[0] == "---":
        header, lines = extract_yaml_header(lines)

    template = index_template()

    middle_step = substitute_header(header, template)
    result = substitute_content("\n".join(lines), middle_step)

    outputfilename = "_index.html"
    if len(args) > 1 and args[1] == "-r":
        outputfilename = "index.html"

    with open(outputfilename, "w") as outputfile:
        outputfile.write(result)
        print(
            "Output written to {}. Check that it's correct.".format(outputfilename)
        )


if __name__ == "__main__":
    main()
