using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Drawing.Text;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Numeros_Bernoulli
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnConvertir_Click(object sender, EventArgs e)
        {
            int Indice;
            if (int.TryParse(txtIndice.Text, out Indice) && Indice >= 0 && Indice <= 100) 
            {
                double resultado = CalcularBernoulli(Indice);
                lblRespuesta.Text = $"B{Indice} = {resultado}";
            }
            else 
            {
                MessageBox.Show("Por favor, ingrese un número entero entre 0 y 100.");
            }
        }
        private double CalcularBernoulli(int n)
        {
            // Si n es impar y mayor a 1, el número de Bernoulli es 0
            if (n > 1 && n % 2 != 0)
            {
                return 0;
            }

            // Array para almacenar los valores intermedios de Bernoulli
            double[] A = new double[n + 1];

            // Implementación de la fórmula de Akiyama-Tanigawa
            for (int m = 0; m <= n; m++)
            {
                A[m] = 1.0 / (m + 1);
                for (int j = m; j >= 1; j--)
                {
                    A[j - 1] = j * (A[j - 1] - A[j]);
                }
            }

            // Retornar el valor de Bn
            return n == 1 ? -0.5 : A[0]; // B1 es -1/2, el resto según el cálculo.
        }
    }
}
