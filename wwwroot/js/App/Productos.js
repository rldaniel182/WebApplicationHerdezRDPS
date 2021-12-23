// :::::::::::::::--  BUSCA PRODUCTO  --::::::::::::::::::::

$('#btnBuscarProd').click(function () {
    event.preventDefault();
    ValidateFormBuscaProducto();
    if ($('#frmBuscaProducto').valid()) {
        BuscaProducto();
    }
});

function ValidateFormBuscaProducto() {
    $('#frmBuscaProducto').validate({
        rules: {
            txbBuscarProd: {
                required: true
            }
        },
        errorElement: "em",
        errorPlacement: function (error, element) {
            error.addClass("help-block");
            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.parent("label"));
            } else {
                error.insertAfter(element);
            }
        },
        highlight: function (element, errorClass, validClass) {
        },
        unhighlight: function (element, errorClass, validClass) {
        }
    });
}

function BuildObjectBuscarProdcuto() {
    let Data = new FormData();
    Data.append("Clave", $('#txbBuscarProd').val());
    return Data;
}

function BuscaProducto() {
    event.preventDefault();
    let AjaxPath = SysHost.Uri + 'Producto/GetProducto';
    let Parameters = BuildObjectBuscarProdcuto();
    CallAsyncObjectGenericWhitFiles(
        AjaxPath,
        Parameters,
        function functionSuccessCallBack(xData) {
            var response = xData.data;
            console.log(response);
            if (response.idResponse === 1) {
                PutInformationInModalProducto(response.objectGeneric);
            }
            else {
                alert(response.body);
            }
        }
    );
}

function PutInformationInModalProducto(Producto) {
    $('#claveProducto').val(Producto.claveProducto);
    $('#nombreProducto').val(Producto.nombreProducto);
    $('#distancia').val(Producto.distancia);
    $('#precioPesos').val(Producto.precioPesos);
    $('#iva').val(Producto.iva);
    $('#totalEnvioDolares').val(Producto.totalEnvioDolares);
    $('#totalEnvioEuros').val(Producto.totalEnvioEuros);
    $("#frmBuscaProducto").validate().destroy();
    $('#frmBuscaProducto')[0].reset();
    $('#ModalProducto').modal('show');
}

// :::::::::::::::--  BUSCA PRODUCTOS  --::::::::::::::::::::

// LEFTH
$('#btnBuscarProdLeft').click(function () {
    event.preventDefault();
    BuscaProductosLeft();
});

function BuscarProdLeft() {
    let AjaxPath = SysHost.Uri + 'Producto/GetLefth';
    CallAsyncObjectGenericGET(
        AjaxPath,
        function functionSuccessCallBack(xData) {
            let response = xData.data;
            console.log(response);
            if (response.idResponse === 1) {
                datatableInitColumArray('tblProdcutos', response.objectGeneric);
            }
            else {
                alert(response.body);
                datatableInitColumArray('tblProdcutos', null);
            }
        }
    );
}

// RIGTH

$('#btnBuscarProdRigth').click(function () {
    event.preventDefault();
    BuscaProductosRigth();
});

function BuscarProdRight() {
    let AjaxPath = SysHost.Uri + 'Producto/GetRigth';
    CallAsyncObjectGenericGET(
        AjaxPath,
        function functionSuccessCallBack(xData) {
            let response = xData.data;
            console.log(response);
            if (response.idResponse === 1) {
                datatableInitColumArray('tblProdcutos', response.objectGeneric);
            }
            else {
                alert(response.body);
                datatableInitColumArray('tblProdcutos', null);
            }
        }
    );
}

// :::::::::::::::--  DATATABLE  --::::::::::::::::::::

function datatableInitColumArray(IdDataTable, DataList) {
    //Se crea un array con las columnas data -> mDataProp
    let columnArray = new Array();

    // General Columns 
    columnArray.push({ "sTitle": "Clave", "mDataProp": "Clave", "sClass": "text-left", "sWidth": "20%", "bSortable": true });
    columnArray.push({ "sTitle": "Nombre", "mDataProp": "Nombre", "sClass": "text-left", "sWidth": "20%", "bSortable": true });
    DataTableGeneric(IdDataTable, DataList, columnArray);
    $("#" + IdDataTable + "").DataTable().columns.adjust();

}

