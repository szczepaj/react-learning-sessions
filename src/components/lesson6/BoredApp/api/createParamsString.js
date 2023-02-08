export const createParamsString = (params = {}) => {
    const urlParamString = Object.keys(params).map(key => `${key}=${params[key]}`).join('&')

    return urlParamString ? `?${urlParamString}` : ''
}