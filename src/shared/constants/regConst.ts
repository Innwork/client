export const regEmail =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
export const regUsername = /^[a-zA-Z0-9].{3,}/;
export const regName = /^[a-zA-Zа-яА-Я]{1,20}/
export const regPhone = /^.{0,3}[0-9]{10}/
export const regDate = /^202[3-9]-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])/;