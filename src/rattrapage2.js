export function Echanger(T, i, j) {
    const temp = T[i];
    T[i] = T[j];
    T[j] = temp;
}


export function Ranger(T) {
    let gauche = 0;
    let droite = T.length - 1;

    while (gauche < droite) {

        while (gauche < droite && T[gauche] === 0) {
            gauche++;
        }

        while (gauche < droite && T[droite] === 1) {
            droite--;
        }

        if (gauche < droite) {
            Echanger(T, gauche, droite);

            gauche++;
            droite--;
        }
    }

    return T;
}


export function NombreUn(T) {
    let i = 0;

    while (i < T.length && T[i] === 0) {
        i++;
    }

    return T.length - i;
}
