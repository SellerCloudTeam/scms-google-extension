window.onload = function() {
    var theDamnSendEmailButton = document.getElementById('aLnkSendEmail');
    if (theDamnSendEmailButton) {
        theDamnSendEmailButton.classList.remove('button2');
        theDamnSendEmailButton.style.paddingBottom = '3px';
        theDamnSendEmailButton.style.paddingTop = '3px';
        theDamnSendEmailButton.style.paddingLeft = '3px';
        theDamnSendEmailButton.style.paddingRight = '3px';
        theDamnSendEmailButton.style.border = 'solid 1px';
        theDamnSendEmailButton.style.borderColor = '#ffffff';
        theDamnSendEmailButton.style.backgroundImage = "none";
        theDamnSendEmailButton.style.background = "#333";
        theDamnSendEmailButton.style.color = "white";
    }

    var active_button = document.createElement('style');

    active_button.innerHTML = `
    ul.pureCssMenu li.active, ul.pureCssMenu li.active a.active {
        color: #ffffff !important
    }`;

document.head.appendChild(active_button);
};

const targetElements = [  

    {selector: '.page', color: '#262626'},
    {selector: '.page nav', background: 'black'},
    {selector: '#topsearch ul li a', backgroundColor: '#999999'},
    {selector: '#topsearch ul', backgroundColor: '#999999', textColor: 'white'},
    {selector: '#topsearch ul li.active a', textColor: "white"},
    {selector: '#topsearch ul li.active a strong', textColor: "#ffffff"},
    {selector: '#pnlKS ul li a', backgroundColor: '#999999'},
    {selector: '#pnlKS ul', backgroundColor: '#999999', textColor: 'white'},
    {selector: '#pnlKS ul li.active a', textColor: "white"},
    {selector: '#pnlKS ul li.active a strong', textColor: "#ffffff"},
    {selector: '#fldsetAdvanced ul li a', backgroundColor: '#999999'},
    {selector: '#fldsetAdvanced ul', backgroundColor: '#999999', textColor: 'white'},
    {selector: '#fldsetAdvanced ul li.active a', backgroundColor: '#999999', textColor: 'white'},
    {selector: '#fldsetAdvanced ul li.active a strong', backgroundColor: '#999999', textColor: "#ffffff"},
    {selector: '#fldsetAdvanced', borderColor: '#ffffff'},
    {selector: '#fldsetAdvanced>legend', textColor: 'white'},
    {selector: '#mainContent', color: 'black', removeOverflow: true},
    {selector: '#mainContent', borderColor: '#ffffff'},
    {selector: '#mainContent>label', textColor: 'white'},
    {selector: '#mainContent legend', textColor: 'white'},
    {selector: '#mainContent>div>div>table tbody tr th', backgroundColor: '#333'},
    {selector: '#mainContent>fieldset>p', textColor: '#ffffff'},
    {selector: '#mainContent>fieldset>p strong', textColor: 'red'}, 
    {selector: '#mainContent li', textColor: 'white'},    
    {selector: '#mainContent p', textColor: 'white'},    
    {selector: '#mainContent strong', textColor: '#ffffff'},    
    {selector: '#mainContent p em', textColor: 'white'},    
    {selector: '#mainContent p s', textColor: '#ff6666'},
    {selector: '#mainContent strong u', textColor: '#ffffff'},
    {selector: '#mainContent label i', textColor: 'red'},
    {selector: '#mainContent ins', textColor: 'white'},
    {selector: '#mainContent .col-xs-3 table thead tr th a', textColor: '#ffffff'},
    {selector: '#mainContent thead tr th', textColor: 'white', backgroundColor: '#333', paddingTop: "5px"},
    {selector: '#mainContent em', textColor: '#ffffff'},
    {selector: '#mainContent ul.list-group>li.list-group-item', backgroundColor: 'black'},
    {selector: '#mainContent div.col-md-10 span', textColor: 'red'},
    {selector: '#lblTicketDescription label', textColor: 'white'},
    {selector: '#lblTicketDescription s', textColor: '#ff6666'},
    {selector: '#lblTicketDescription', textColor: 'white'},
    {selector: '#lblTicketDescription div', background: 'black'},
    {selector: '#lblTicketDescription', borderColor: '#ffffff'},
    {selector: '#lblTicketDescription p a', textColor: '#66ffcc'},
    {selector: '#lblTicketDescription a', textColor: '#66ffcc'},
    {selector: '#lblTicketDescription p code', textColor: '#ffa366'},
    {selector: '#lblTicketDescription p', textColor: 'white'},
    {selector: '#lblTicketDescription p em', textColor: 'white'},
    {selector: '#lblTicketDescription em', textColor: 'white'},
    {selector: '#lblTicketDescription strong', textColor: '#ffffff'},
    {selector: '#lblTicketDescription p strong', textColor: '#ffffff'},
    {selector: '#lblTicketDescription p text', textColor: 'white'},
    {selector: '#lblTicketDescription p pre', textColor: '#ffa366'},
    {selector: '#lblTicketDescription pre', textColor: '#ffa366'},
    {selector: '#lblTicketDescription p u', textColor: '#ffffff'},
    {selector: '#lblTicketDescription ol', textColor: 'white'},
    {selector: '#lblTicketDescription b', textColor: '#ffffff'},
    {selector: '#lblTicketDescription i', textColor: 'red'},
    {selector: '#lblTicketDescription p sub', filter: 'invert(100%)'},
    {selector: '#lblTicketDescription p sup', filter: 'invert(100%)'},
    {selector: '#lblTicketDescription p big', filter: 'invert(100%)'},
    {selector: '#lblTicketDescription p big code', textColor: 'green'},
    {selector: '#lblTicketDescription font', textColor: 'white'},
    {selector: '#lblTicketDescription font u', textColor: 'white'},
    {selector: '#lblTicketDescription li u', textColor: 'white'},
    {selector: '#lblTicketDescription blockquote div', textColor: 'white'},
    {selector: '#TicketDescription p', textColor: 'white'},
    {selector: '#TicketDescription strong', textColor: '#ffffff'},
    {selector: '#TicketDescription br', textColor: 'white'},
    {selector: '#TicketDescription a', textColor: '#66ffcc'},
    {selector: '#TicketDescription b', textColor: '#ffffff'},
    {selector: '#DESCRIPTION td p', textColor: 'white'},
    {selector: '#DESCRIPTION td strong', textColor: 'white'},
    {selector: '#DESCRIPTION td div', textColor: 'white', backgroundColor: 'black'},
    {selector: '#lblNotes p a', backgroundColor: 'black', color: '#ffffff'},
    {selector: '#lblNotes div', backgroundColor: 'black', textColor: '#ffa366'},
    {selector: '#lblNotes ul', backgroundColor: 'black', textColor: 'white'},
    {selector: '#lblNotes ul li', backgroundColor: 'black', textColor: 'white'},
    {selector: '#lblNotes li', backgroundColor: 'black', textColor: 'white'},
    {selector: '#lblNotes u', backgroundColor: 'black', textColor: 'white'},
    {selector: '#lblNotes u font', backgroundColor: 'black', textColor: 'white'},
    {selector: '#lblNotes ul li font', backgroundColor: 'black', textColor: 'white'},
    {selector: '#lblNotes li font', backgroundColor: 'black', textColor: 'white'},
    {selector: '#lblNotes font', backgroundColor: 'black', color: 'white'},
    {selector: '#lblNotes font u', backgroundColor: 'black', color: 'white'},
    {selector: '#lblNotes p sub', backgroundColor: 'black', color: 'white'},
    {selector: '#lblNotes s', textColor: '#ff6666'},
    {selector: '#lblNotes p span', backgroundColor: 'black', textColor: '#ffa366'},
    {selector: '#lblNotes div', backgroundColor: 'black', textColor: '#ffa366'},
    {selector: '#lblNotes ul', backgroundColor: 'black', textColor: 'white'},
    {selector: '#lblNotes ul li', backgroundColor: 'black', textColor: 'white'},
    {selector: '#lblNotes li', backgroundColor: 'black', textColor: 'white'},
    {selector: '#lblNotes u', backgroundColor: 'black', textColor: 'white'},
    {selector: '#lblNotes u font', backgroundColor: 'black', textColor: 'white'},
    {selector: '#lblNotes ul li font', backgroundColor: 'black', textColor: 'white'},
    {selector: '#lblNotes li font', backgroundColor: 'black', textColor: 'white'},
    {selector: '#lblNotes font', backgroundColor: 'black', color: 'white'},
    {selector: '#lblNotes font u', backgroundColor: 'black', color: 'white'},
    {selector: '#lblNotes p sub', backgroundColor: 'black', color: 'white'},
    {selector: '#NOTES td p', textColor: 'white'},
    {selector: '#NOTES td strong', textColor: 'white'},
    {selector: '#NOTES td div', textColor: 'white', backgroundColor: 'black'},
    {selector: '#collapse_2 strong', textColor: '#ffffff'},
    {selector: '#collapse_2 hr', borderColor: '#800000'},
    {selector: '#collapse_2 b', textColor: '#ffffff'},
    {selector: '#collapse_2 a', textColor: '#66ffcc'},
    {selector: '#collapse_2 p', textColor: 'white'},
    {selector: '#collapse_2 p em', textColor: 'white'},
    {selector: '#collapse_2 em', textColor: 'white'},
    {selector: '#collapse_2 strong', textColor: '#ffffff'},
    {selector: '#collapse_2 p strong', textColor: '#ffffff'},
    {selector: '#collapse_2 p text', textColor: 'white'},
    {selector: '#collapse_2 p u', textColor: '#ffffff'},
    {selector: '#collapse_2 ol', textColor: 'white'},
    {selector: '#collapse_2 i', textColor: 'red'},
    {selector: 'table tbody tr td b', textColor: 'white'},
    {selector: 'table.grid', backgroundColor: 'black'},
    {selector: 'table.grid tbody tr td p strong', textColor: '#ffffff'},
    {selector: 'table.grid tbody tr td strong', textColor: '#ffffff'},
    {selector: 'table.grid tbody tr td a', textColor: '#ffffff'},
    {selector: 'table.grid tbody tr td u', textColor: '#ffffff'},
    {selector: 'table.grid tbody tr td div i', textColor: 'red'},
    {selector: 'table.grid thead tr th', backgroundColor: '#666666'},
    {selector: 'table.ui-jqgrid-htable.ui-common-table.table.table-bordered.table-condensed thead tr th', backgroundColor: '#666666'},
    {selector: 'table td p', textColor: 'white'},
    {selector: 'table td strong', textColor: 'white'},
    {selector: 'table td div', textColor: 'white', backgroundColor: 'black'},
    {selector: 'table td blockquote', textColor: 'white'},
    {selector: 'table td p b i', textColor: 'white'},
    {selector: 'table table tbody tr td a', backgroundColor: '#666666'},
    {selector: 'table table tbody tr td span', textColor: 'white', backgroundColor: '#333'},
    {selector: 'table#gvUsers thead tr th', backgroundColor: '#333333'},    
    {selector: '.footer .wrapper p a', textColor: '#ffffff'},
    {selector: '.footer .wrapper p span', textColor: '#ffffff'},
    {selector: '.footer .wrapper p span label', textColor: 'white'},
    {selector: '.footer .wrapper p span label b', textColor: 'white'},
    {selector: '.footer', color: '#333'},
    {selector: '.button', color: '#333', borderColor: '#ffffff'},
    {selector: '.button2', color: '#333', borderColor: '#ffffff', backgroundImage: "none"},
    {selector: '#btnEdit', buttonBackgroud: '#333'},
    {selector: '.panel-heading.clearfix', color: '#333', textColor: 'white'},
    {selector: '.panel.panel-default', color: 'black', textColor: 'white'},
    {selector: '.panel.panel-default p', textColor: 'white'},
    {selector: '.panel.panel-default', borderColor: '#ffffff'},
    {selector: '#jqgh_tblAuditHistoryList_Operationtype', textColor: '#ffffff'},
    {selector: '#jqgh_tblAuditHistoryList_FullName', textColor: '#ffffff'},
    {selector: '#jqgh_tblAuditHistoryList_ModifiedDate', textColor: '#ffffff'},
    {selector: '#jqgh_tblFollowUpHistoryList_CreatedByName', textColor: '#ffffff'},
    {selector: '#jqgh_tblFollowUpHistoryList_CreatedOn', textColor: '#ffffff'},
    {selector: '#jqgh_tblFollowUpHistoryList_IsFollowedUp', textColor: '#ffffff'},
    {selector: '#jqgh_tblTicketEmailHistory_ActionType', textColor: '#ffffff'},
    {selector: '#jqgh_tblTicketEmailHistory_ClientContactNames', textColor: '#ffffff'},
    {selector: '#jqgh_tblTicketEmailHistory_SentOn', textColor: '#ffffff'},
    {selector: '#jqgh_tblTicketEmailHistory_TicketId', textColor: '#ffffff'},
    {selector: '#jqgh_tblClientContactAuditHistoryList_Operationtype', textColor: '#ffffff'},
    {selector: '#jqgh_tblClientContactAuditHistoryList_ClientContactName', textColor: '#ffffff'},
    {selector: '#jqgh_tblClientContactAuditHistoryList_FullName', textColor: '#ffffff'},
    {selector: '#jqgh_tblClientContactAuditHistoryList_ModifiedDate', textColor: '#ffffff'},
    {selector: '#jqgh_tblPSProjectAuditHistoryList_Operationtype', textColor: '#ffffff'},
    {selector: '#jqgh_tblPSProjectAuditHistoryList_PSProjectDesc', textColor: '#ffffff'},
    {selector: '#jqgh_tblPSProjectAuditHistoryList_FullName', textColor: '#ffffff'},
    {selector: '#jqgh_tblPSProjectAuditHistoryList_ModifiedDate', textColor: '#ffffff'},
    {selector: '#jqgh_tblClientSubscriptionAuditHistoryList_Operationtype', textColor: '#ffffff'},
    {selector: '#jqgh_tblClientSubscriptionAuditHistoryList_SubscriptionTypeName', textColor: '#ffffff'},
    {selector: '#jqgh_tblClientSubscriptionAuditHistoryList_FullName', textColor: '#ffffff'},
    {selector: '#jqgh_tblClientSubscriptionAuditHistoryList_ModifiedDate', textColor: '#ffffff'},
    {selector: '#jqgh_tblShowExistingRequest_ClientName', textColor: '#ffffff'},
    {selector: '#jqgh_tblShowExistingRequest_RequestCreatedByEmployee', textColor: '#ffffff'},
    {selector: '#jqgh_tblShowExistingRequest_RequestedCreatedOn', textColor: '#ffffff'},
    {selector: '#jqgh_tblShowExistingRequest_ReasonForUpdate', textColor: '#ffffff'},
    {selector: '#jqgh_tblShowExistingRequest_TicketIds', textColor: '#ffffff'},
    {selector: '#liTab_1', color: '#666666'},
    {selector: '#liTab_1 a', textColor: 'black'},
    {selector: '#liTab_2', color: '#666666'},
    {selector: '#liTab_2 a', textColor: 'black'},
    {selector: '#liTab_3', color: '#666666'},
    {selector: '#liTab_3 a', textColor: 'black'},
    {selector: '#liTab_4', color: '#666666'},
    {selector: '#liTab_4 a', textColor: 'black'},
    {selector: '#liTab_5', color: '#666666'},
    {selector: '#liTab_5 a', textColor: 'black'},
    {selector: '#liTab_6', color: '#666666'},
    {selector: '#liTab_6 a', textColor: 'black'},
    {selector: '#liTab_1000', color: '#666666'},
    {selector: '#liTab_1000 a', textColor: 'black'},
    {selector: '#template_trTaskHeader_1 th', backgroundColor: '#333'},
    {selector: '#template_trTaskHeader_2 th', backgroundColor: '#333'},
    {selector: '#template_trTaskHeader_3 th', backgroundColor: '#333'},
    {selector: '#template_trTaskHeader_4 th', backgroundColor: '#333'},
    {selector: '#template_trTaskHeader_5 th', backgroundColor: '#333'},
    {selector: '#template_trTaskHeader_6 th', backgroundColor: '#333'},
    {selector: '#template_trTaskListTabHeader_1000 th', backgroundColor: '#333'},
    {selector: '#fldSetRequestEntry legend', textColor: 'white'},
    {selector: '#fldSetRequestEntry label', textColor: 'white'},
    {selector: '#fldSetRequestEntry ul', backgroundColor: '#333'},
    {selector: '#fldSetRequestEntry ul li a', textColor: 'white'},
    {selector: '#fldSetRequestEntry ul li a strong', textColor: 'white'},
    {selector: '#ui-timepicker-div-txtImplClient_WeekStartTime', backgroundColor: 'black'},
    {selector: '#ui-timepicker-div-txtImplClient_WeekStartTime>div', backgroundColor: '#666666'},
    {selector: '#ui-datepicker-div dt', textColor: 'white'},
    {selector: '#ui-datepicker-div dd', textColor: 'white'},
    {selector: '#ui-datepicker-div', color: 'black'},
    {selector: '#ui-timepicker-div-txtImplClient_WeekStartTime_Old', backgroundColor: 'black'},
    {selector: '#ui-timepicker-div-txtImplClient_WeekStartTime_Old>div', backgroundColor: '#666666'},
    {selector: '.ui-datepicker-header.ui-widget-header.ui-helper-clearfix.ui-corner-all', backgroundColor: '#666666'},
    {selector: '.ui-state-default', color: '#666666'},
    {selector: '#cke_1_top', background: '#333'},
    {selector: '#cke_1_bottom', background: '#333'},
    {selector: '#cke_1_contents', filter: 'invert(100%)'},
    {selector: '#cke_135_top', background: '#333'},
    {selector: '#cke_135_bottom', background: '#333'},
    {selector: '#cke_135_contents', filter: 'invert(100%)'},
    {selector: '#cke_2_top', background: '#333'},
    {selector: '#cke_2_bottom', background: '#333'},
    {selector: '#cke_2_contents', filter: 'invert(100%)'},
    {selector: '#cke_268_top', background: '#333'},
    {selector: '#cke_268_bottom', background: '#333'},
    {selector: '#cke_268_contents', filter: 'invert(100%)'},
    {selector: '#cke_68_top', background: '#333'},
    {selector: '#cke_68_bottom', background: '#333'},
    {selector: '#cke_68_contents', filter: 'invert(100%)'},
    {selector: '#ui_tpicker_time_label_txtImplClient_WeekStartTime_Old', textColor: 'white'},
    {selector: '#ui_tpicker_time_txtImplClient_WeekStartTime_Old', textColor: 'white'},
    {selector: '#ui_tpicker_second_label_txtImplClient_WeekStartTime_Old', textColor: 'white'},
    {selector: '#ui_tpicker_hour_label_txtImplClient_WeekStartTime_Old', textColor: 'white'},
    {selector: '#ui_tpicker_minute_label_txtImplClient_WeekStartTime_Old', textColor: 'white'},
    {selector: '#tblListWorklog tbody tr td strike', textColor: '#ff6666'},
    {selector: '#tblListWorklog tbody tr td i', textColor: '#ffffff'},    
    {selector: '#tblListWorklog tfoot tr td b', textColor: 'white'},   
    {selector: '#tblListWorklog thead tr th', backgroundColor: '#666666'},
    {selector: '#tblAttachments>div', backgroundColor: '#black', textColor: 'white'},
    {selector: '#tblAttachments', textColor: 'red'},
    {selector: '#tblPriorityHistoryList_Operationtype', textColor: '#ffffff'},
    {selector: '#tblPriorityHistoryList_FullName', textColor: '#ffffff'},
    {selector: '#tblPriorityHistoryList_CreatedOn', textColor: '#ffffff'},
    {selector: '#tblEstimates_ID div', textColor: '#ffffff'},
    {selector: '#tblEstimates_Name div', textColor: '#ffffff'},
    {selector: '#tblEstimates_StringField div', textColor: '#ffffff'},
    {selector: '#tblShowExistingRequest_TicketIds', textColor: '#ffffff'},
    {selector: '#tblListLeadInfoNoteLog thead tr th', textColor: 'white', backgroundColor: '#666666'},
    {selector: '#tblListMilestones thead tr th', textColor: 'white', backgroundColor: '#333'},
    {selector: '#tabs li', color: '#666666', textColor: 'white'},
    {selector: '#tab1_pane div label', textColor: 'white'},
    {selector: '#tab1_pane h3 a', textColor: '#ffffff'},
    {selector: '#tab1_pane ul li a', textColor: '#ffffff'},
    {selector: '#tab5_pane table tbody tr th', textColor: 'white', backgroundColor: '#666666'},
    {selector: '#tab6_pane table tbody tr th', textColor: 'white', backgroundColor: '#666666'},
    {selector: '#tab4_pane table tbody tr th', textColor: 'white', backgroundColor: '#666666'},
    {selector: '#tab7_pane div label', textColor: 'white'},
    {selector: '#tab7_pane div', textColor: '#ffffff'},
    {selector: 'input', color: '#333', textColor: 'white'},
    {selector: 'select', color: '#333', textColor: 'white'},
    {selector: 'h1', textColor: 'white'},
    {selector: 'h2', textColor: 'white'},
    {selector: 'h3', textColor: 'white'},
    {selector: 'h4', textColor: 'white'},
    {selector: 'h4 a', textColor: 'white'},
    {selector: 'h5', textColor: 'white'},
    {selector: '.modal-header a', color: 'white'},
    {selector: '.modal-body label', textColor: 'white'},
    {selector: '.modal-content', background: 'black', borderColor: '#ffffff'},
    {selector: '.modal-header', background: 'black'},
    {selector: '.formheader', color: '#999999'},
    {selector: '.formheader2', color: '#333'},
    {selector: '.formheader2 ul', background: '#999999'},
    {selector: '#txtInternalDescription', textColor: 'white', backgroundColor: 'black'},
    {selector: '#txtEmpBio', backgroundColor: 'black', textColor: 'white'},
    {selector: '#txtDescription', backgroundColor: 'black'},
    {selector: '#txtDemoReport', textColor: 'white', backgroundColor: 'black'},
    {selector: '#txtAction', textColor: 'white', backgroundColor: 'black'},
    {selector: '#txtContractNotes', textColor: 'white', backgroundColor: 'black'},
    {selector: '#txtWL_WorkNote', textColor: 'white', backgroundColor: 'black'},
    {selector: '#txtWL_Description', backgroundColor: 'black', textColor: 'white'},
    {selector: '#txtNotes', backgroundColor: 'black', textColor: 'white'},
    {selector: '#txtNote', backgroundColor: 'black', textColor: 'white'},
    {selector: '#txtImplClient_Notes', backgroundColor: 'black'},
    {selector: '#lblCurrentDBVSVersion b', textColor: '#ffffff'},
    {selector: '#lblHeadingText', textColor: '#ffffff'},
    {selector: '#lblStatus', textColor: 'white'},
    {selector: '#lblIsLive', textColor: '#ffffff'},
    {selector: '#lblMaxRec', textColor: '#ffffff'},
    {selector: '#divNote', textColor: '#ffffff'},
    {selector: '#divDisplayFilterStatus label i', textColor: 'white'},
    {selector: '#divDisplayFilterStatus label', textColor: 'red'},
    {selector: '#divClientListArea label', textColor: 'white'},
    {selector: '#divNoDataFor_worklog', textColor: 'red'},
    {selector: '#divNoDataFor_Attachment', textColor: 'red'},
    {selector: '#div_selectedTimeZones ul li', backgroundColor: '#333', textColor: 'white'},
    {selector: '#divPreviewClient01 label', textColor: 'white'},
    {selector: '#divPreviewTitle01 label', textColor: 'white'},
    {selector: '#divNewimplClientlogPanel_Old>div', backgroundColor: 'black'},
    {selector: '#divNewimplClientlogPanel_Old>div label', textColor: 'white'},
    {selector: '#divNewimplClientlogPanel>div label', textColor: 'white'},
    {selector: '#divNoDataForContact', textColor: 'red'},
    {selector: '#divImportFields>div label', textColor: 'white'},    
    {selector: '#collapse_1 div label', textColor: 'white'},
    {selector: '#collapse_1 div b', textColor: 'white'},
    {selector: '#HeadLoginName', color: 'inherit', textColor: 'white'},
    {selector: '#HeadLoginStatus', color: 'inherit', textColor: 'white'},
    {selector: '#sidebar', backgroundColor: 'black', textColor: 'white'},
    {selector: '#sidebar table tbody tr th', backgroundColor: '#333'},
    {selector: '#wikEdDiffContainer pre', backgroundColor: 'black', textColor: '#ffa366'},
    {selector: '#wikEdDiffContainer div', backgroundColor: 'black', textColor: 'white'},
    {selector: '#createBy', textColor: 'red'},
    {selector: '#createBy b', textColor: '#ffffff'},
    {selector: '#aLoginToServer img', filter: 'invert(100%)'},
    {selector: '#aLoginToDeltaServer img', filter: 'invert(100%)'},

    // Chaos:
    {selector: '#divTicketNote p font span', textColor: 'white'},
    {selector: '.pureCssMenum', color: '#666666'},
    {selector: '.ticketid a', color: 'inherit', textColor: 'white'},
    {selector: 'li.pureCssMenui', backgroundColor: '#666666'},
    {selector: 'a.pureCssMenui', backgroundColor: '#666666'},
    {selector: '.chkHeader label', textColor: 'white'},
    {selector: '.col-lg-3>label', textColor: 'white'},
    {selector: '.col-lg-3 ul li a', backgroundColor: 'grey'},
    {selector: '.left.controlset ul li a', backgroundColor: 'grey'},
    {selector: '.label label-primary', color: 'white'},
    {selector: '#spanHeadingDates', textColor: 'white'},
    {selector: 'span.label', color: '#333', textColor: 'white'},
    {selector: '.full label', textColor: 'white'},
    {selector: 'iframe', backgroundColor: '#333', textColor: 'white'},
    {selector: 'ul.multiselect-container.dropdown-menu', color: '#666666', textColor: 'white'},
    {selector: 'ul.multiselect-container.dropdown-menu label', textColor: '#333'},
    {selector: 'ul.pureCssMenu.pureCssMenum', backgroundColor: '#333'},
    {selector: '.left ul', backgroundColor: '#999999'},
    {selector: '.left label', textColor: '#ffffff'},
    {selector: '#chkCategory tbody tr td label ', textColor: 'white'},
    {selector: '#yt', textColor: '#ffffff'},
    {selector: '.col-sm-4 b', textColor: 'red'},
    {selector: '#gview_tblShowExistingRequest .ui-jqgrid-titlebar.ui-jqgrid-caption', backgroundColor: '#333'},
    {selector: '#litIsLiveDate', textColor: '#ffffff'},
    {selector: '#dropdownMenu1', color: '#333', borderColor: '#ffffff'},
    {selector: '#mLabel', textColor: '#ffffff'},
    {selector: '#gvUsers tbody tr th', backgroundColor: '#333'},
    {selector: '#fieldSet1 legend', textColor: 'white'},    
    {selector: '#fldsetAdvanced label', textColor: 'white'},    
    {selector: '#gvLeadUser th', textColor: 'white', backgroundColor: '#333'},
    {selector: '#pnlSearch fieldset', borderColor: '#ffffff'},
    {selector: '#pnl1 fieldset label b', textColor: 'red'},
    {selector: '#pnl1 fieldset>div ', textColor: 'red'},
    {selector: '#SpanPriority', filter: 'invert(100%)'},
    {selector: 'td', backgroundColor: 'black', textColor: 'white'},
    {selector: 'td a', textColor: '#ffffff'},
    {selector: 'td b label', textColor: 'red'},
    {selector: '#spanID', textColor: 'red'},
    {selector: '#AAutoLogin img', filter: 'invert(100%)'},
    {selector: '#gvclients tbody tr th', textColor: 'white', backgroundColor: '#333', paddingTop: "5px"},
    {selector: '#aShowhideFilter img', borderRadius: '5px'},
    {selector: '#Table2 sup', textColor: 'white'},
    {selector: '.priority-on span', filter: 'invert(100%)'},
    {selector: '.priority-off span', filter: 'invert(100%)'},
    {selector: '#HeadLoginStatus', textColor: 'red'},
    {selector: '#alert_Internal>div', backgroundColor: '#333', textColor: 'white'},
    {selector: '.row .col-lg-11 .panel-heading', backgroundColor: '#666666'},
    {selector: '#gvSaved tbody tr th', backgroundColor: '#333', textColor: 'white'},
    {selector: '.row .col-lg-12 .panel-heading', backgroundColor: '#666666'},
    {selector: '#sidebar fieldset legend', textColor: 'white'},
    {selector: '#VacationResponder', background: 'black'},
    {selector: '#bs-example-navbar-collapse-1 div div label b', textColor: 'white'},
    {selector: 'body pre', backgroundColor: 'black', textColor: 'white'},
    {selector: '.col-sm-7 a img', content: 'url("https://brand.sellercloud.com/download/sc_logo_horizontal_white_stroke_rgb.png"', width: "auto", paddingTop: "5px"},
    {selector: '.inner-page', color: '#262626'},
    {selector: '.navigation', color: '#333', borderColor: '#ffffff'},

];


function applyStyles(element, item) {
    if (item.color) {
        element.style.background = item.color;
    }
    if (item.textColor) {
        element.style.setProperty('color', item.textColor, 'important');
    }
    if (item.borderColor) {
        element.style.borderColor = item.borderColor;
        element.style.borderStyle = 'solid';
        element.style.borderWidth = '1px';
    }
    if (item.removeOverflow) {
        element.style.overflow = 'visible';
    }
    if (item.backgroundColor) {
        element.style.setProperty('background-color', item.backgroundColor, 'important');
    }
    if (item.background) {
        element.style.background = item.background;
    }
    if (item.filter) {
        element.style.filter = item.filter;
    }
    if (item.content) {
        element.style.content = item.content;
    }
    if (item.width) {
        element.style.width = item.width;
    }
    if (item.paddingTop) {
        element.style.paddingTop = item.paddingTop;
    }
    if (item.borderRadius) {
        element.style.borderRadius = item.borderRadius;
    }
    
}

function targetElementsByIdOrClassWithColorAndStyle(elements) {
    elements.forEach(item => {
        const selectedElements = document.querySelectorAll(item.selector);
        selectedElements.forEach(element => {
            applyStyles(element, item);
            
        });
    });
}

function hideContent() {
    const style = document.createElement('style');
    style.id = 'hidePageStyle'; 
    style.textContent = `
        body {
            visibility: hidden !important;
        }
    `;
    document.head.appendChild(style);
}

function revealContent() {
    const style = document.getElementById('hidePageStyle');
    if (style) {
        style.remove(); 
    }
}

function applyStylesAndRevealContent() {
    targetElementsByIdOrClassWithColorAndStyle(targetElements);
    revealContent();
}

const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(newNode => {
            if (newNode.nodeType === Node.ELEMENT_NODE) {
                targetElements.forEach(item => {
                    if (newNode.matches(item.selector)) {
                        applyStyles(newNode, item);
                    }
                    newNode.querySelectorAll(item.selector).forEach(element => {
                        applyStyles(element, item);
                    });
                });
            }
        });
    });
});

// Configuration for the observer
const config = { childList: true, subtree: true };

// Observe the entire document
observer.observe(document.documentElement, config);

// Hide content and apply styles
hideContent();
applyStylesAndRevealContent();
