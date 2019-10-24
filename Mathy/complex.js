class Complex {
  constructor(real=0, imag=0) {
    this.real = real;
    this.imag = imag;
  }

  set_real(real) {
    this.real = real;
  }

  set_imag(imag) {
    this.imag = imag;
  }

  toString() {
    return `${this.real} + i*${this.imag}`;
  }

  static add(c1, c2) {
    return new Complex(c1.real + c2.real, c1.imag + c2.imag);
  }

  static mult(c1, c2) {
    return new Complex(
      c1.real * c2.real - c1.imag * c2.imag,
      c1.real * c2.imag + c2.real * c1.imag
    );
  }

  static arg(c1) {
    if ( c1.real == 0 && c1.imag == 0) { return 0; }
    return Math.atan(c1.imag / c1.real)
  }

  static abs(c1) {
    return Math.sqrt(c1.real * c1.real + c1.imag * c1.imag);
  }

  /*
   * log(c1) = log(abs(c1)) + 2 pi i arg(c1)
   */
  static log(c1) {
    return new Complex(Math.log(Complex.abs(c1)), Complex.arg(c1));
  }

  /*
   * c1^(ix) = cos x + i sin x
   */
  static eix(x) {
    return new Complex(Math.cos(x), Math.sin(x));
  }

  /*
   * e^c1 = e^(x + it) = e^x * e^it
   */
  static exp(c1) {
    let factor = new Complex(Math.exp(c1.real), 0);
    let rest =   Complex.eix(c1.imag);
    return Complex.mult(factor, rest);
  }

  /*
   * c1^c2 = e^(c2 * log c1)
   */
  static pow(c1, c2) {
    let exponent = Complex.mult(c2, Complex.log(c1));
    return Complex.exp(exponent);
  }
}
