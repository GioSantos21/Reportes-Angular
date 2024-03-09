import { Component, OnInit } from '@angular/core';

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  constructor() {}

  ngOnInit()  {
      
  }

  createPdf() {

    // VARIABLES DE CONTENIDO

    //ENCABEZADO:
    var Factura = "SI2312203";
    var Contenedores = 10;
    var FechaIngreso = "12/27/2023";
    var NumeroEmbarque = "10=pacas=880";
    var FechaCuadre = "12/27/2024";
    var Proveedor = "Alembre Cootton";
    var PacasRecibidas = 18;
    var EmpresaAuditora = "CENTRAL AMERICA SPINNING WORKS S.A.DE C.V.";

    // TABLA 1: PESOS:
    var PesoBrutoEmpresa  = 433087;
    var PesoBrutoProveedor = 440737;
    var PesoBrutoDiferencia = PesoBrutoEmpresa -PesoBrutoProveedor;
    var PesoTaraEmpresa = 2605;
    var PesoTaraProveedor = 2605;
    var PesoTaraDiferencia = PesoTaraEmpresa - PesoTaraProveedor;
    var PesoNetoEmpresa = 430482;
    var PesoNetoProveedor = 438132;
    var PesoNetoDiferencia = PesoNetoEmpresa - PesoNetoProveedor;

    //Aray
    var ArrayTabla = [
      {Numero: 'CMCU4723786', Marca: '4A094=88', Lote: '4A094', PesoCliente: 42618.5, Pacas: 1},
      {Numero: 'CMCU4524974', Marca: '4A091=88 ', Lote: '4A091', PesoCliente: 43741, Pacas: 1},
      {Numero: 'CMCU4586889', Marca: '4A092=88', Lote: '4A092', PesoCliente: 43862.5, Pacas: 1},
      {Numero: 'CMCU4538920', Marca: '4A089=88 ', Lote: '4A089', PesoCliente: 43540.5 , Pacas: 1},
      {Numero: 'CMCU4534756', Marca: '4A083=88', Lote: '4A083', PesoCliente: 43604.5, Pacas: 1},
      {Numero: 'CMCU4724144', Marca: '4A095=88 ', Lote: '4A095', PesoCliente: 42528.5, Pacas: 1},
      {Numero: 'CMCU4551711', Marca: '4A088=88', Lote: '4A088', PesoCliente: 43175, Pacas: 1},
      {Numero: 'CMCU4535942', Marca: '4A085=88 ', Lote: '4A085', PesoCliente: 42757.5, Pacas: 1},
      {Numero: 'CMCU4711548', Marca: '4A087=88', Lote: '4A087', PesoCliente: 43357.5 , Pacas: 88},
      {Numero: 'FCIU9428330', Marca: '4A090=88 ', Lote: '4A090', PesoCliente: 43901.5, Pacas: 88},
    ];

    var FilasTabla = [];

    // Encabezados de la tabla
    FilasTabla.push([
      {text: 'Número', alignment: 'center', bold: true },
      {text: 'Marca', alignment: 'center', bold: true},
      {text: 'Lote', alignment: 'center', bold: true}, 
      {text: 'Peso Cliente', alignment: 'center', bold: true},
      {text: 'Pacas', alignment: 'center', bold: true},
    ]);

    // Construir filas de la tabla dinamicamente desde el array
    ArrayTabla.forEach(function(item) {
      FilasTabla.push([
        {text: item.Numero, alignment: 'center' },
        {text: item.Marca, alignment: 'center' },
        {text: item.Lote, alignment: 'center' },
        {text: item.PesoCliente, alignment: 'center' },
        {text: item.Pacas, alignment: 'center' }
        ]);
    });

    var pdfDefinition = {

      //  ##### HEADER #####
      header:
      {
        stack: [
          { text: 'Informacion del Reporte', margin: [ 40, 15 , 0, 5], bold: true  },
          { canvas: [{ type: 'line', x1: 40, y1: 5, x2: 550, y2: 5, lineWidth: 2 }] },
            
        ]
    }, 

      //  ##### FOOTER #####
    footer: function(currentPage, pageCount) {
      return { 
        stack: [
          { canvas: [{ type: 'line', x1: 40, y1: 5, x2: 550, y2: 5, lineWidth: 2 }] }, '\n',
          { text: currentPage.toString() + ' / ' + pageCount, margin: [275, -10, 0, 0], bold: true  },
        ]
        };
    },

     //  ##### PRIMEROS DATOS #####
    content: [
      '\n',
      {
        columns: [
          {
            width: 115,
            text: 'Factura:', 
            style: 'subheader'            
          },
          {
            width: 137,
            text: Factura
          },
          {
            width: 130,
            text: 'Contenedores:',
            style: 'subheader',
          },
          {
            width: 'auto',
            text: Contenedores
          }
        ],
      },'\n',
     {
        columns: [
          {
            width: 115,
            text: 'Fecha Ingreso:',
            style: 'subheader',
          },
          {
            width: 137,
            text: FechaIngreso
          },
          {
            width: 130,
            text: 'Número Embarque:',
            style:  'subheader',
          },
          {
            width: 'auto',
            text: NumeroEmbarque
          }
        ],
      },'\n',
      {
        columns: [
          {
            width: 115,
            text: 'Fecha de Cuadre:',
            style: 'subheader',
          },
          {
            width: 138,
            text: FechaCuadre
          },
          {
            width: 130,
            text: 'Proveedor:',
            style: 'subheader',
          },
          {
            width: 'auto',
            text: Proveedor
          }
        ],
      },'\n',
      {
        columns: [
          {
            width: 115,
            text: 'Pacas Recibidas:',
            style: 'subheader',
          },
          {
            width: 138,
            text: PacasRecibidas
          },
          {
            width: 130,
            text: 'Empresa Auditora:',
            style: 'subheader',
          },
          {
            width: 'auto',
            text: EmpresaAuditora
          }
        ],         
      }, '\n',

       //  ##### TABLA 1: PESOS #####
      {
        style: 'table1',
        table: {
          headerRows:1,
          widths: [105,115,125,125],

          body: [
            [
            {text: '', bold: true, alignment: 'center'},
            {text: EmpresaAuditora, bold: true, alignment: 'center'},
            {text: Proveedor, bold: true, alignment: 'center'},
            {text: 'Diferencia', bold: true, alignment: 'center'}
            ],
            [
            { text: 'Peso Bruto', },
            { text: PesoBrutoEmpresa + ' lb',  alignment: 'center'},
            { text: PesoBrutoProveedor + ' lb',  alignment: 'center'},
            { text: PesoBrutoDiferencia + ' lb',  alignment: 'center'}
            ],
            [
              { text: 'Peso Tara', },
              { text: PesoTaraEmpresa + ' lb',  alignment: 'center'},
              { text: PesoTaraProveedor + ' lb',  alignment: 'center'},
              { text: PesoTaraDiferencia + ' lb', alignment: 'center'}
            ],
            [
              { text: 'Peso Neto', },
              { text: PesoNetoEmpresa + ' lb',  alignment: 'center'},
              { text: PesoNetoProveedor + ' lb',  alignment: 'center'},
              { text: PesoNetoDiferencia + ' lb',  alignment: 'center'}
            ],
          ]
        }
      }, '\n', '\n', '\n',
      {
        text: 'Información de Contenedores',
        bold: true,
        alignment: 'center'
      }, '\n',

       //  ##### TABLA 2: DINAAMICA #####
      {
        table: {
          headerRows: 1,
          widths: [100,90,90,100,78], 
          body: FilasTabla, 
        }
      }, '\n',
     
       //  ##### PARTE FINAL #####
       {
        columns: [
          {
            width: 290,
            text: 'Diferencia de Pesos:',
            bold: true,
          },
          {
            width: 70,
            text: 'Peso Bruto:',
            bold: true,
          },
          {
            width: 'auto',
            text: EmpresaAuditora
          }
        ],
      },
      , '\n',
       {
        columns: [
          {
            width: 30,
            text: ' ',
          },
          {
            width: 350,
            text: PesoBrutoDiferencia
          },
          {
            width: 60,
            text: PesoBrutoEmpresa,
            lineHeight: 3,
          },
        ],
      }, 

       //  ##### FIRMA  #####
      {
        text: 'F. ______________________________________',
        bold: true,
        alignment: 'center'
      },
    ], 

     //  ##### ESTILOS  #####
    styles: {
      subheader: {
        fontSize: 13,
        bold: true
      }
    } 
    
  };

    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();
  }

}
