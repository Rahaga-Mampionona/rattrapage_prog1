export function NegatifPositif(T) {
    let gauche = 0;
    let droite = T.length - 1;

    while (gauche < droite) {

        if (T[gauche] > 0) {
            const temp = T[gauche];
            T[gauche] = T[droite];
            T[droite] = temp;
            droite--;
        } else {
            gauche++;
        }
    }

    return T;
}