function curlRegex(left: string, right: string) {
    return new RegExp(`/${left}?<=\().*(?=${right})`, 'gm')
}

export { curlRegex };