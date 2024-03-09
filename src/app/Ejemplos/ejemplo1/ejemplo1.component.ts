import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrls: ['./ejemplo1.component.css']
})
export class Ejemplo1Component implements OnInit {

  constructor(){}

  ngOnInit(): void {
      
  }

  createPdf1(){
    
    const listAStyle = {
      markerColor: '#ff0000', // Rojo
    };
    
    const listBStyle = {
      markerColor: '#00ff00', // Verde
    };

    const listC = {
      markerColor: 'blue',
    };

    var miArray = [
      { nombre: 'Ejemplo 1', cantidad: 3, precio: 10 },
      { nombre: 'Ejemplo 2', cantidad: 2, precio: 15 },
      { nombre: 'Ejemplo 3', cantidad: 5, precio: 8 }
    ];
    
    var filasDeTabla = [];
    
    // Encabezados de la tabla
    filasDeTabla.push(['Nombre', 'Cantidad', 'Precio', 'Total']);
    
    // Construir filas de la tabla dinámicamente desde el array
    miArray.forEach(function (item) {
        var total = item.cantidad * item.precio;
        filasDeTabla.push([item.nombre, item.cantidad, '$' + item.precio, '$' + total]);
    });
    

    var pdfDefinition1 = {
      content: [
        '\n ##### Estilos de Parrados: ##### \n\n',
        'parrafo simple sin estilos ','\n',
        {
          text: 'parrafo usando text con un fontSize: 25', fontSize: 20
        }, '\n',
        {
          text: [
            'parrafo simple nuevamente','\n\n',
            {
              text: 'parrafo con text nuevamente dentro de una matriz \n con un fontSize: 15s y aplicando una "pleca invertida sobre n" para un salto de linea', fontSize: 15
            },
            '\n\n nuevamente texto simple'
          ]
        },'\n ##### Aplicando estilos: Styles por separado: ##### \n\n',
        {
          text: 'Esto es un encabezado', style: 'header'
        }, '\n',
        'parrafo simple', '\n',
        {
          text: 'Otro parrafo con otro estilo', style: 'anotherStyle'
        }, '\n',
        {
          text: 'Multiples estilos aplicados', style: ['header','anotherStyle']
        }, '\n ##### Estilo predeterminado ##### \n\n',
          'Texto simple con estilo predeterminado (comentado por el momento)', '\n ##### Propiedad: lineHeight ##### \n\n',
        {
          text: 'style LineHeight con un lineHeight: 3',  lineHeight: 3,
        }, 
        {
          text: 'Esto hace un tipo salto de linea '
        }, '\n #####  Propiedad: bold ##### \n\n',
        {
          text: 'style bold', bold: true
        }, '\n ##### Propiedad: italics ##### \n\n',
        {
          text: 'style italics', italics: true
        }, '\n #####  Propiedad: alignment - Alinaciones##### \n\n',
        {
          text: 'style alignment left', alignment: 'left'
        },
        {
          text: 'stlye alignment center', alignment: 'center'
        },
        {
          text: 'stlye alignment right', alignment: 'right'
        },
        {
          text: 'stlye alignment justify: \n Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efciat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi', alignment: 'justify'
        }, '\n ##### Propiedad: characrerSpacing - espaciado entre caracteres: ##### \n\n',
        {
          text: 'style characrerSpacing: 1', characterSpacing: 1
        },
        {
          text: 'style characrerSpacing: 2', characterSpacing: 2
        },
        {
          text: 'style characrerSpacing: 3', characterSpacing: 3
        },
        {
          text: 'style characrerSpacing: 4', characterSpacing: 4
        },
        {
          text: 'style characrerSpacing: -1', characterSpacing: -1
        },
        {
          text: 'style characrerSpacing: -2', characterSpacing: -2
        }, '\n ##### Propiedad: Color ##### \n\n',
        {
          text: 'style color: red', color: 'red'
        },
        {
          text: 'style color hexadecimal: #ff5500', color: '#ff5500'
        },  '\n ##### Propiedad: background ##### \n\n',
        {
          text: 'style background: blue y color: white', background: 'blue', color: 'white'
        }, '\n ##### Propiedad: Listas con colores ##### \n\n',
           'Lista A - Desordenada:',
        {            
          ul: [
            { text: 'Viñeta 1'},
            { text: 'Viñeta 2'},
            { text: 'Viñeta 3'}
          ],
          style: listAStyle,
        }, '\n',
        'Lista B - Ordenada:',
        {
          ol: [
            { text: 'Primer elemento' }, // Rojo
            { text: 'Segundo elemento' }, // Verde
            { text: 'Tercer elemento' } // Azul
          ],
          style:  listBStyle,
        }, '\n',
        'Lista C - Ordenada:',
        {
          ol: [
            { text: 'Elemento 1', markerColor: 'rgb(255, 0, 0)' }, // Rojo
            { text: 'Elemento 2', markerColor: 'blue' }, // Azul
            { text: 'Elemento 3', markerColor: '#00FF00' } // Verde
          ],
          style: listC,
        }, '\n ##### Propiedad: decoration ##### \n\n',
        {
          text: 'Texto con decoraciones: underline',
          decoration: 'underline',
        },
        {
          text: 'Texto con decoraciones: lineThrough',
          decoration: 'lineThrough',
        },
        {
          text: 'Texto con decoraciones: overline',
          decoration: 'overline',
        }, '\n ##### Propiedad: decorationStyle ##### \n\n',
        {
          text: 'Texto con decorationStyle: solid - sólida',
          decoration: 'underline',
          decorationStyle: 'solid',
        },
        {
          text: 'Texto con decorationStyle: dotted - punteada',
          decoration: 'underline',
          decorationStyle: 'dotted',
        },
        {
          text: 'Texto con decorationStyle: dashed - discontinua',
          decoration: 'underline',
          decorationStyle: 'dashed',
        },
        {
          text: 'Texto con decorationStyle: double - Doble ',
          decoration: 'underline',
          decorationStyle: 'double',
        },
        {
          text: 'Texto con decorationStyle: wavy - ondulada',
          decoration: 'underline',
          decorationStyle: 'wavy',
        }, '\n ##### Propiedad: decorationColor ##### \n\n',
        {
          text: 'Texto con decorationColor: RED',
          decoration: 'underline',
          decorationColor: 'red',
        }, '\n ######## Columnas: ########',
        {
          columns: [
            {
              width: 'auto',
              text: 'First Column'
            },
            {
              width: '*',
              text: 'Second Column'
            },
            {
              width: 100,
              text: 'Third Column'
            },
            {
              width: '20%',
              text: 'Fourth Column'
            }
          ],
          columnGap: 10
        }, '\n ######## Tablas 1: Un poco básica ########',
        {
          layout: 'lightHorizontalLines',
          table: {
            headerRows:1,
            widths: ['*','auto',100,'*'],
            
            body: [
              ['First', 'Second', 'Third', 'The last one'],
              ['Value 1','Value 2','Value 3','Value 4'],
              [{ text: 'Bold value', bold: true},
              { text: 'fillColor', fillColor: 'lightblue'},'Value 3','Value 4' ]
            ]
          },
        }, '\n ######## Tabla 2: Propiedad - fillColor general ########',
        {
          table: {
            headerRows: 1,
            widths: ['*','*','*'],

            body: [
              ['Titulo - 1','Titulo - 2','Titulo - 3'],
              ['Val1','Val2','Val3']
            ]
          },
          fillColor: 'lightgreen'
        }, '\n ######## Tabla 3: Propiedad - fillColor específica ########',
        {
          table: {
            headerRows: 1,
            widths: ['auto','auto','auto'],

            body: [
              [{text: 'Celda 1', fillColor: 'aquamarine'}, 
               {text: 'Celda 2', fillColor: 'skyblue'}, 
               {text: 'Celda 3', fillColor: 'paleturquoise'}
              ],
              ['Val1','Val2','Val3']
            ]
          }
        }, '\n ######## Tabla 4: Propiedad - fillOpacity ########',
        {
          table: {
            headerRows: 1,
            widths: [100,100,100],

            body: [
              [
                {text: 'Celda 1', fillColor: 'red', fillOpacity: 0.5}, 
                {text: 'Celda 2', fillColor: 'blue', fillOpacity: 0.1}, 
                {text: 'Celda 3', fillColor: 'green', fillOpacity: 0.9} //entre este más cerca del 1 es mas fuerte, y si esta mas cerca del 0 es mas palido
              ],
              ['Val1','Val2','Val3']
            ]

          }
        }, '\n ######## Margenes ########',
        // margin: [left, top, right, bottom]
        { text: 'Texto de prueba', margin: [ 5, 2, 10, 20 ] },
        { text: 'Texto de prueba', margin: [ 0, 0, 90,0 ] },
        // margin: [horizontal, vertical]
        { text: 'Texto de prueba ', margin: [5, 2] },

        // margin: equalLeftTopRightBottom
        { text: 'Texto de prueba ', margin: 5 },  '\n ######## Tabla Dinamica ########',
        { text: 'Ejemplo de Tabla Dinámica', style: 'tablaDinamica' },
        {
            table: {
                headerRows: 1,
                widths: ['*', 'auto', 'auto', 'auto'],
                body: filasDeTabla
            }
        }
        

      ],
      // ########## STYLES:  ##########

      /* defaultStyle: {
        fontSize: 15,
        bold: true
      }, */

      styles:{
        header: {
          fontSize: 22,
          bold: true
        },
        tablaDinamica: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10]
        },
          anotherStyle: {
            italics: true,
            alignment: 'right'
          },
        
        
      }
    };
    

    const pdf1 = pdfMake.createPdf(pdfDefinition1);
    pdf1.open();
  }
  
}
