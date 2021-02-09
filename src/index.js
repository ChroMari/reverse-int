module.exports = reverse = (n) => Number(String((n < 0) ? -n : n)
                                      .split('')
                                      .reverse()
                                      .join(''));

