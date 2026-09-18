import { Echanger, NombreUn } from "./rattrapage2.js";

export function triLignes(M) {
    const nombreLignes = M.length;

    for (let i = 0; i < nombreLignes - 1; i++) {

        for (let j = 0; j < nombreLignes - 1 - i; j++) {

            const nombreUnLigne1 = NombreUn(M[j]);
            const nombreUnLigne2 = NombreUn(M[j + 1]);

            if (nombreUnLigne1 > nombreUnLigne2) {
                Echanger(M, j, j + 1);
            }
        }
    }

    return M;
}


