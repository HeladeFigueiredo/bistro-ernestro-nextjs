import {splitClean} from "@/helpers/commons";

/**
 * Função de validação se a rota ativa é a mesma que a rota atual
 * @param {string} path: recebe o path atual vindo do hook useRouter - objeto com os dados da rota atual
 * @param {string} link: link do objeto NAV_ITEM
 * @returns {boolean}
 */
const isActiveRoute = ({path, link}) => {
  console.log({path, link});
  
  if(path === '/') {
    // Só roda esse return se path é '/' (Quando estou na home)
    return path === link;
  }
  
  // Só roda esse return se path NÃO é '/' (Quando NÃO estou na home)
  const paths = splitClean(path, '/');
  const baseRoute = splitClean(link, '/')[0];
  return paths.includes(baseRoute);
}

export const routerHelpers = {
  isActiveRoute
};
