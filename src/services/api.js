const base_url = "https://viacep.com.br/ws";

const api = {
  get(url = "") {
    return fetch(`${base_url}${url}`).then((e) => e?.json());
  },
};

export default api;
