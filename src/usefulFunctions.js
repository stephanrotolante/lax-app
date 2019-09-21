export const dispatchRedirect = url => {
    document.dispatchEvent(new CustomEvent('change-page', {detail:{url}}))
}

export const toggleSideBar = url => {
    document.dispatchEvent(new CustomEvent('toggle-sidebar'))
}