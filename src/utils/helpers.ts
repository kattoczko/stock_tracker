import camelcase from "lodash.camelcase";

type generalObject = { [key: string]: string | number };

export function formatObjectKeys(obj: generalObject): generalObject {
  let formatedObject: generalObject = {};
  const objectKeys = Object.keys(obj);

  for (let key of objectKeys) {
    const newKey = camelcase(
      key
        .split(" ")
        .slice(1)
        .join(" ")
    );
    formatedObject[newKey] = obj[key];
  }

  return formatedObject;
}
