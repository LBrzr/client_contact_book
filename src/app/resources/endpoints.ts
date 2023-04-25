const base = 'https://evaluation-technique.lundimatin.biz/api/';

let endpoints = {
  contacts:
    base + 'clients/?fields=nom,email,tel,adresse,ville,code_postal&sort=+nom',
  auth: base + 'auth/',
};

export default endpoints;
