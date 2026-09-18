export function NegatifPositif(T) {
    let gauche = 0;
    let droite = T.length - 1;

    while (gauche < droite) {

        
        while (gauche < droite && T[gauche] <= 0) {
            gauche++;
        }

        while (gauche < droite && T[droite] > 0) {
            droite--;
        }

        if (gauche < droite) {
            const temp = T[gauche];
            T[gauche] = T[droite];
            T[droite] = temp;

            gauche++;
            droite--;
        }
    }

    return T;
}