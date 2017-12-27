let kvRe = /(--|_)$/;

module.exports = classNames => Object.entries(classNames)
  .filter(([k, v]) => !!v)
  .map(([k, v]) => {
    if (!kvRe.test(k)) {
      return k;
    }

    return `${k}${v}`;
  })
  .join(' ');
