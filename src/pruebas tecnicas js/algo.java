public class RotacionArreglo {

    public static void main(String[] args) {

        int[] numeros = { 1, 2, 3, 4 };
    }

    public static int[] RotarArreglo (int[] numeros) {

        int temporal;
        int[] resultado = new int[numeros.length];
        resultado[0] = numeros[numeros.length - 1];

        for (int i = 0; i < numeros.length; i++) {
            resultado[i] = numeros[i- 1];
        }
        return resultado;
    }

}