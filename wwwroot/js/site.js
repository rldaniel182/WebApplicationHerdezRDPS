// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
// :::::::::::::::--Source DataTable --::::::::::::::::::::::::::::::

function DataTableGeneric(IdDataTable, DataList, columnArray) {
    let IsDataTableWasCreated = $.fn.DataTable.isDataTable('#' + IdDataTable);
    if (IsDataTableWasCreated) {
        $('#' + IdDataTable).DataTable().destroy();
        $('#' + IdDataTable).empty();
    }
    $('#' + IdDataTable).DataTable({
        "bDestroy": true
        , "scrollY": "300px"
        , "scrollCollapse": true
        , "paging": true
        , "autoWidth": true
        , "compact": true
        , "scrollX": false
        , "aaSorting": [[0, "asc"]]
        , data: DataList
        , "aoColumns": columnArray
        , "fnInitComplete": function (settings, json) {
            setTimeout(function () {
                $($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw();
            }, 100);
        }
    }).columns.adjust();
};
// :::::::::::::::--AJAX--::::::::::::::::::::::::::::::::::::::::::::::::::::
var SysHost = {
    Uri: $('#Host').val()
};

function CallAsyncObjectGenNoLoading(url, xdata, functionSuccessCallBack) {

    $.ajax({
        url: url,
        type: 'POST',
        data: { xdata: xdata },
        dataType: 'json',
        beforeSend: function () {
            console.log("initiating connection to the server");
        },
        success: function (xData) {
            functionSuccessCallBack(xData);
        },
        error: function (xhr, status, error) {
            console.log(error);
            alert("The operation cannot be completed at this time, please try again later");
        },
        complete: function () {
            console.log("End connection to server");
        }
    });
}

function CallAsyncGETNoLoading(url, xdata, functionSuccessCallBack) {

    $.ajax({
        url: url,
        type: 'POST',
        data: { xdata: xdata },
        dataType: 'json',
        beforeSend: function () {
            console.log("initiating connection to the server");
        },
        success: function (xData) {
            functionSuccessCallBack(xData);
        },
        error: function (xhr, status, error) {
            console.log(error);
            alert("The operation cannot be completed at this time, please try again later");
        },
        complete: function () {
            console.log("End connection to server");
        }
    });
}

function CallAsyncObjectGenericWhitFiles(url, xdata, functionSuccessCallBack) {

    $.ajax({
        url: url,
        type: 'POST',
        data: xdata,
        processData: false,
        contentType: false,
        cache: false,
        beforeSend: function () {
            $('#ModalLoading').modal('show');
            console.log("initiating connection to the server");
        },
        success: function (xData) {
            functionSuccessCallBack(xData);
        },
        error: function (xhr, status, error) {
            console.log(error);
            alert("The operation cannot be completed at this time, please try again later");
            $('#ModalLoading').modal('hide');
        },
        complete: function () {
            console.log("End connection to server");
            $('#ModalLoading').modal('hide');

        }
    });
}

function CallAsyncObjectGeneric(url, xdata, functionSuccessCallBack) {

    $.ajax({
        url: url,
        type: 'POST',
        data: { xdata: xdata },
        dataType: 'json',
        beforeSend: function () {
            console.log("initiating connection to the server");
            $('#ModalLoading').modal('show');
        },
        success: function (xData) {
            functionSuccessCallBack(xData);
        },
        error: function (xhr, status, error) {
            alert("The operation cannot be completed at this time, please try again later");
            console.log(error);
            $('#ModalLoading').modal('hide');
        },
        complete: function () {
            console.log("End connection to server");
            $('#ModalLoading').modal('hide');
        }
    });
}

function CallAsyncObjectGenericGET(url, functionSuccessCallBack) {

    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        beforeSend: function () {
            console.log("initiating connection to the server");
            $('#ModalLoading').modal('show');
        },
        success: function (xData) {
            functionSuccessCallBack(xData);
        },
        error: function (xhr, status, error) {
            alert("The operation cannot be completed at this time, please try again later");
            console.log(error);
            $('#ModalLoading').modal('hide');
        },
        complete: function () {
            console.log("End connection to server");
            $('#ModalLoading').modal('hide');
        }
    });
}

function CallAsyncObjectGenericDDL(url, xdata, functionSuccessCallBack) {

    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        beforeSend: function () {
            console.log("initiating connection to the server");
        },
        success: function (xData) {
            functionSuccessCallBack(xData);
        },
        error: function (xhr, status, error) {
            console.log(error);
            alert("The operation cannot be completed at this time, please try again later");
        },
        complete: function () {
            console.log("End connection to server");
        }
    });
}

// :::::::::::::::--Others--::::::::::::::::::::::::::::::::::::::::::::::::::::

function LoadDropdownList(data, IdTag) {
    let long = data.length;
    for (var i = 0; i < long; i++) {
        $(IdTag).append($("<option />").val(data[i].idArea).text(data[i].name));
    }
}
