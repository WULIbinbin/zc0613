export function setEmptyKey(data:object[], keyname:string) {
  return [...data].map((item) => {
    Object.keys(item).forEach((key) => {
      if (item[key] === "" || item[key] === null) {
        item[key] = keyname;
      } else {
        item[key] = item[key];
      }
    });
    return item;
  });
}

export function debounce(fn:any, delay:number) {
  let timeout:any;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
}
