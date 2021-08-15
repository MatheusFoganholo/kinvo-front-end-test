export function getData() {
  return { type: '@data/GET_REQUEST' };
}

export function failData() {
  return { type: '@data/GET_FAILURE' };
}

export function fillData(payload) {
  return { type: '@data/GET_SUCCESS', payload };
}
