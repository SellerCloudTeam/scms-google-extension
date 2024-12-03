const defaultColor = '#8fc800';
let selectedColor = defaultColor;
let extensionEnabled = true; // Default to true
let stylesApplied = false;
  
    // Function to retrieve settings and apply or remove styles
    function initialize() {
        chrome.storage.local.get(['selectedColor', 'extensionEnabled'], (data) => {
          selectedColor = data.selectedColor || defaultColor;
          extensionEnabled = data.extensionEnabled !== false; // Default to true if undefined
      
          if (extensionEnabled) {
            applyStylesAndRevealContent();
          } else {
            removeStyles();
            revealContent();
          }
        });
      }
      
  
    // Listen for messages from the popup to update styles or toggle extension
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (request.action === 'updateStyles') {
        // Update the selected color from the message
        selectedColor = request.color || defaultColor;
        if (extensionEnabled) {
          updateStylesWithNewColor();
        }
      } else if (request.action === 'toggleExtension') {
        extensionEnabled = request.enabled;
        if (extensionEnabled) {
          applyStylesAndRevealContent();
        } else {
          removeStyles();
        }
      }
    });

    document.addEventListener('DOMContentLoaded', () => {
      function addCustomStyleToHead(selector, property, value) {
        let styleElement = document.getElementById('dynamicCustomStyles');
    
        // If the style element does not exist, create it
        if (!styleElement) {
          styleElement = document.createElement('style');
          styleElement.id = 'dynamicCustomStyles';
          document.head.appendChild(styleElement);
        }
    
        // Create the CSS rule
        const styleRule = `${selector} { ${property}: ${value} !important; }`;
    
        // Check if the rule already exists to avoid duplicates
        if (!styleElement.innerHTML.includes(styleRule)) {
          styleElement.innerHTML += styleRule;
        }
      }
    
      // Use this function to apply styles to problematic selectors
      addCustomStyleToHead('.input-group-btn.search-panel.open ul li a>b', 'color', 'white');
      addCustomStyleToHead('.input-group-btn.search-panel.open ul li a:hover', 'background-color', '#999999');
    });
    
const targetElements = [  

    {selector: '#txtConnReason', background: '#333'},  
    {selector: '#txtConnReason', textColor: 'white'},
    {selector: '#txtTitle', backgroundColor: 'black', textColor: 'white'},
    {selector: '.form label', textColor: 'red'},
    {selector: '#ui-timepicker-div-txtServerNote_Time', backgroundColor: '#333'},
    {selector: '#txtServerNotes', backgroundColor: '#333', textColor: 'white'},
    {selector: '.page', color: '#262626'},
    {selector: '.page nav', background: 'black'},
    {selector: '#topsearch ul li a', backgroundColor: '#999999'},
    {selector: '#topsearch ul', backgroundColor: '#999999', textColor: 'white'},
    {selector: '#topsearch ul li.active a', textColor: "white"},
    {selector: '#topsearch ul li.active a strong', textColor: "#8fc800"},
    {selector: '#pnlKS ul li a', backgroundColor: '#999999'},
    {selector: '#pnlKS ul', backgroundColor: '#999999', textColor: 'white'},
    {selector: '#pnlKS ul li.active a', textColor: "white"},
    {selector: '#pnlKS ul li.active a strong', textColor: "#8fc800"},
    {selector: '#fldsetAdvanced ul li a', backgroundColor: '#999999'},
    {selector: '#fldsetAdvanced ul', backgroundColor: '#999999', textColor: 'white'},
    {selector: '#fldsetAdvanced ul li.active a', backgroundColor: '#999999', textColor: 'white'},
    {selector: '#fldsetAdvanced ul li.active a strong', backgroundColor: '#999999', textColor: "#8fc800"},
    {selector: '#fldsetAdvanced', borderColor: '#8fc800'},
    {selector: '#fldsetAdvanced>legend', textColor: 'white'},
    {selector: '#mainContent', color: 'black', removeOverflow: true},
    {selector: '#mainContent', borderColor: '#8fc800'},
    {selector: '#mainContent>label', textColor: 'white'},
    {selector: '#mainContent legend', textColor: 'white'},
    {selector: '#mainContent>div>div>table tbody tr th', backgroundColor: '#333'},
    {selector: '#mainContent>fieldset>p', textColor: '#8fc800'},
    {selector: '#mainContent>fieldset>p strong', textColor: 'red'}, 
    {selector: '#mainContent li', textColor: 'white'},    
    {selector: '#mainContent p', textColor: 'white'},    
    {selector: '#mainContent strong', textColor: '#8fc800'},    
    {selector: '#mainContent p em', textColor: 'white'},    
    {selector: '#mainContent p s', textColor: '#ff6666'},
    {selector: '#mainContent strong u', textColor: '#8fc800'},
    {selector: '#mainContent label i', textColor: 'red'},
    {selector: '#mainContent ins', textColor: 'white'},
    {selector: '#mainContent .col-xs-3 table thead tr th a', textColor: '#8fc800'},
    {selector: '#mainContent thead tr th', textColor: 'white', backgroundColor: '#333', paddingTop: "5px"},
    {selector: '#mainContent em', textColor: '#8fc800'},
    {selector: '#mainContent ul.list-group>li.list-group-item', backgroundColor: 'black'},
    {selector: '#mainContent div.col-md-10 span', textColor: 'red'},
    {selector: '#lblTicketDescription label', textColor: 'white'},
    {selector: '#lblTicketDescription s', textColor: '#ff6666'},
    {selector: '#lblTicketDescription', textColor: 'white'},
    {selector: '#lblTicketDescription div', background: 'black'},
    {selector: '#lblTicketDescription', borderColor: '#8fc800'},
    {selector: '#lblTicketDescription p a', background: 'black', textColor: '#66ffcc'},
    {selector: '#lblTicketDescription a', textColor: '#66ffcc'},
    {selector: '#lblTicketDescription p code', textColor: '#ffa366'},
    {selector: '#lblTicketDescription p', textColor: 'white'},
    {selector: '#lblTicketDescription p em', textColor: 'white'},
    {selector: '#lblTicketDescription em', textColor: 'white'},
    {selector: '#lblTicketDescription strong', textColor: '#8fc800'},
    {selector: '#lblTicketDescription p strong', textColor: '#8fc800'},
    {selector: '#lblTicketDescription p text', textColor: 'white'},
    {selector: '#lblTicketDescription p pre', textColor: '#ffa366'},
    {selector: '#lblTicketDescription pre', textColor: '#ffa366'},
    {selector: '#lblTicketDescription p u', textColor: '#8fc800'},
    {selector: '#lblTicketDescription ol', textColor: 'white'},
    {selector: '#lblTicketDescription b', textColor: '#8fc800'},
    {selector: '#lblTicketDescription i', textColor: 'red'},
    {selector: '#lblTicketDescription p sub', filter: 'invert(100%)'},
    {selector: '#lblTicketDescription p sup', filter: 'invert(100%)'},
    {selector: '#lblTicketDescription p big', filter: 'invert(100%)'},
    {selector: '#lblTicketDescription p big code', textColor: 'green'},
    {selector: '#lblTicketDescription font', textColor: 'white'},
    {selector: '#lblTicketDescription font u', textColor: 'white'},
    {selector: '#lblTicketDescription u', textColor: 'white'},
    {selector: '#lblTicketDescription li u', textColor: 'white'},
    {selector: '#lblTicketDescription blockquote div', textColor: 'white'},
    {selector: '#TicketDescription p', textColor: 'white'},
    {selector: '#TicketDescription strong', textColor: '#8fc800'},
    {selector: '#TicketDescription br', textColor: 'white'},
    {selector: '#TicketDescription a', textColor: '66ffcc'},
    {selector: '#TicketDescription b', textColor: '#8fc800'},
    {selector: '#DESCRIPTION td p', textColor: 'white'},
    {selector: '#DESCRIPTION td strong', textColor: 'white'},
    {selector: '#DESCRIPTION td div', textColor: 'white', backgroundColor: 'black'},
    {selector: '#lblNotes p a', background: 'black', textColor: '#66ffcc'},
    {selector: '#lblNotes td a', background: 'black', textColor: '#66ffcc'},
    {selector: '#lblNotes td span', backgroundColor: 'black', textColor: '#ffff99'},
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
    {selector: '#lblNotes p', backgroundColor: 'black', color: 'white'},
    {selector: '#NOTES td p', textColor: 'white'},
    {selector: '#NOTES td strong', textColor: 'white'},
    {selector: '#NOTES td div', textColor: 'white', backgroundColor: 'black'},
    {selector: '#collapse_2 strong', textColor: '#8fc800'},
    {selector: '#collapse_2 hr', borderColor: '#800000'},
    {selector: '#collapse_2 b', textColor: '#8fc800'},
    {selector: '#collapse_2 a', textColor: '66ffcc'},
    {selector: '#collapse_2 p', textColor: 'white'},
    {selector: '#collapse_2 p em', textColor: 'white'},
    {selector: '#collapse_2 em', textColor: 'white'},
    {selector: '#collapse_2 strong', textColor: '#8fc800'},
    {selector: '#collapse_2 p strong', textColor: '#8fc800'},
    {selector: '#collapse_2 p text', textColor: 'white'},
    {selector: '#collapse_2 p u', textColor: '#8fc800'},
    {selector: '#collapse_2 ol', textColor: 'white'},
    {selector: '#collapse_2 i', textColor: 'red'},
    {selector: 'table tbody tr td b', textColor: 'white'},
    {selector: 'table.grid', backgroundColor: 'black'},
    {selector: 'table.grid tbody tr td p strong', textColor: '#8fc800'},
    {selector: 'table.grid tbody tr td strong', textColor: '#8fc800'},
    {selector: 'table.grid tbody tr td a', textColor: '#8fc800'},
    {selector: 'table.grid tbody tr td u', textColor: '#8fc800'},
    {selector: 'table.grid tbody tr td div i', textColor: 'red'},
    {selector: 'table.grid thead tr th', backgroundColor: '#666666'},
    {selector: 'table.ui-jqgrid-htable.ui-common-table.table.table-bordered.table-condensed thead tr th', backgroundColor: '#666666'},
    {selector: 'table td p', textColor: 'white'},
    {selector: 'table td strong', textColor: 'white'},
    {selector: 'table td div', textColor: 'white', backgroundColor: 'black'},
    {selector: 'table td blockquote', textColor: 'white'},
    {selector: 'table td p b i', textColor: 'white'},
    {selector: 'table table tbody tr td span', textColor: 'white', backgroundColor: '#333'},
    {selector: 'table#gvUsers thead tr th', backgroundColor: '#333333'},    
    {selector: '.footer .wrapper p a', textColor: '#8fc800'},
    {selector: '.footer .wrapper p span', textColor: '#8fc800'},
    {selector: '.footer .wrapper p span label', textColor: 'white'},
    {selector: '.footer .wrapper p span label b', textColor: 'white'},
    {selector: '.footer', color: '#333'},
    {selector: '.button', color: '#333', borderColor: '#8fc800'},
    {selector: '#btnEdit', buttonBackgroud: '#333'},
    {selector: '.panel-heading.clearfix', color: '#333', textColor: 'white'},
    {selector: '.panel.panel-default', color: 'black', textColor: 'white'},
    {selector: '.panel.panel-default p', textColor: 'white'},
    {selector: '.panel.panel-default', borderColor: '#8fc800'},
    {selector: '#jqgh_tblAuditHistoryList_Operationtype', textColor: '#8fc800'},
    {selector: '#jqgh_tblAuditHistoryList_FullName', textColor: '#8fc800'},
    {selector: '#jqgh_tblAuditHistoryList_ModifiedDate', textColor: '#8fc800'},
    {selector: '#jqgh_tblFollowUpHistoryList_CreatedByName', textColor: '#8fc800'},
    {selector: '#jqgh_tblFollowUpHistoryList_CreatedOn', textColor: '#8fc800'},
    {selector: '#jqgh_tblFollowUpHistoryList_IsFollowedUp', textColor: '#8fc800'},
    {selector: '#jqgh_tblTicketEmailHistory_ActionType', textColor: '#8fc800'},
    {selector: '#jqgh_tblTicketEmailHistory_ClientContactNames', textColor: '#8fc800'},
    {selector: '#jqgh_tblTicketEmailHistory_SentOn', textColor: '#8fc800'},
    {selector: '#jqgh_tblTicketEmailHistory_TicketId', textColor: '#8fc800'},
    {selector: '#jqgh_tblClientContactAuditHistoryList_Operationtype', textColor: '#8fc800'},
    {selector: '#jqgh_tblClientContactAuditHistoryList_ClientContactName', textColor: '#8fc800'},
    {selector: '#jqgh_tblClientContactAuditHistoryList_FullName', textColor: '#8fc800'},
    {selector: '#jqgh_tblClientContactAuditHistoryList_ModifiedDate', textColor: '#8fc800'},
    {selector: '#jqgh_tblPSProjectAuditHistoryList_Operationtype', textColor: '#8fc800'},
    {selector: '#jqgh_tblPSProjectAuditHistoryList_PSProjectDesc', textColor: '#8fc800'},
    {selector: '#jqgh_tblPSProjectAuditHistoryList_FullName', textColor: '#8fc800'},
    {selector: '#jqgh_tblPSProjectAuditHistoryList_ModifiedDate', textColor: '#8fc800'},
    {selector: '#jqgh_tblClientSubscriptionAuditHistoryList_Operationtype', textColor: '#8fc800'},
    {selector: '#jqgh_tblClientSubscriptionAuditHistoryList_SubscriptionTypeName', textColor: '#8fc800'},
    {selector: '#jqgh_tblClientSubscriptionAuditHistoryList_FullName', textColor: '#8fc800'},
    {selector: '#jqgh_tblClientSubscriptionAuditHistoryList_ModifiedDate', textColor: '#8fc800'},
    {selector: '#jqgh_tblShowExistingRequest_ClientName', textColor: '#8fc800'},
    {selector: '#jqgh_tblShowExistingRequest_RequestCreatedByEmployee', textColor: '#8fc800'},
    {selector: '#jqgh_tblShowExistingRequest_RequestedCreatedOn', textColor: '#8fc800'},
    {selector: '#jqgh_tblShowExistingRequest_ReasonForUpdate', textColor: '#8fc800'},
    {selector: '#jqgh_tblShowExistingRequest_TicketIds', textColor: '#8fc800'},
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
    {selector: '#tblListWorklog tbody tr td i', textColor: '#8fc800'},    
    {selector: '#tblListWorklog tfoot tr td b', textColor: 'white'},   
    {selector: '#tblListWorklog thead tr th', backgroundColor: '#666666'},
    {selector: '#tblAttachments>div', backgroundColor: '#black', textColor: 'white'},
    {selector: '#tblAttachments', textColor: 'red'},
    {selector: '#tblPriorityHistoryList_Operationtype', textColor: '#8fc800'},
    {selector: '#tblPriorityHistoryList_FullName', textColor: '#8fc800'},
    {selector: '#tblPriorityHistoryList_CreatedOn', textColor: '#8fc800'},
    {selector: '#tblEstimates_ID div', textColor: '#8fc800'},
    {selector: '#tblEstimates_Name div', textColor: '#8fc800'},
    {selector: '#tblEstimates_StringField div', textColor: '#8fc800'},
    {selector: '#tblShowExistingRequest_TicketIds', textColor: '#8fc800'},
    {selector: '#tblListLeadInfoNoteLog thead tr th', textColor: 'white', backgroundColor: '#666666'},
    {selector: '#tblListMilestones thead tr th', textColor: 'white', backgroundColor: '#333'},
    {selector: '#tabs li', color: '#666666', textColor: 'white'},
    {selector: '#tab1_pane div label', textColor: 'white'},
    {selector: '#tab1_pane h3 a', textColor: '#8fc800'},
    {selector: '#tab1_pane ul li a', textColor: '#8fc800'},
    {selector: '#tab5_pane table tbody tr th', textColor: 'white', backgroundColor: '#666666'},
    {selector: '#tab6_pane table tbody tr th', textColor: 'white', backgroundColor: '#666666'},
    {selector: '#tab4_pane table tbody tr th', textColor: 'white', backgroundColor: '#666666'},
    {selector: '#tab7_pane div label', textColor: 'white'},
    {selector: '#tab7_pane div', textColor: '#8fc800'},
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
    {selector: '.modal-content', background: 'black', borderColor: '#8fc800'},
    {selector: '.modal-header', background: 'black'},
    {selector: '.formheader', color: '#999999'},
    {selector: '.formheader2', color: '#333'},
    {selector: '.formheader2 ul', background: '#999999'},
    {selector: '#txtInternalDescription', textColor: 'white', backgroundColor: 'black'},
    {selector: '#txtEmpBio', backgroundColor: 'black', textColor: 'white'},
    {selector: '#txtDescription', backgroundColor: 'black'},
    {selector: '#txtDescription', textColor: 'white'},
    {selector: '#txtDemoReport', textColor: 'white', backgroundColor: 'black'},
    {selector: '#txtAction', textColor: 'white', backgroundColor: 'black'},
    {selector: '#txtContractNotes', textColor: 'white', backgroundColor: 'black'},
    {selector: '#txtWL_WorkNote', textColor: 'white', backgroundColor: 'black'},
    {selector: '#txtWL_Description', backgroundColor: 'black', textColor: 'white'},
    {selector: '#txtNotes', backgroundColor: 'black', textColor: 'white'},
    {selector: '#txtNote', backgroundColor: 'black', textColor: 'white'},
    {selector: '#txtImplClient_Notes', backgroundColor: 'black'},
    {selector: '#lblCurrentDBVSVersion b', textColor: '#8fc800'},
    {selector: '#lblHeadingText', textColor: '#8fc800'},
    {selector: '#lblStatus', textColor: 'white'},
    {selector: '#lblIsLive', textColor: '#8fc800'},
    {selector: '#lblMaxRec', textColor: '#8fc800'},
    {selector: '#divNote', textColor: '#8fc800'},
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
    {selector: '#createBy b', textColor: '#8fc800'},
    {selector: '#aLoginToServer_2 img', filter: 'invert(100%)'},
    {selector: '#aLoginToDeltaServer_2 img', filter: 'invert(100%)'},
    {selector: '#aLoginToServer_ticket img', filter: 'invert(100%)'},
    {selector: '#aLoginToDeltaServer_ticket img', filter: 'invert(100%)'},

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
    {selector: '.left label', textColor: '#8fc800'},
    {selector: '#chkCategory tbody tr td label ', textColor: 'white'},
    {selector: '#yt', textColor: '#8fc800'},
    {selector: '.col-sm-4 b', textColor: 'red'},
    {selector: '#gview_tblShowExistingRequest .ui-jqgrid-titlebar.ui-jqgrid-caption', backgroundColor: '#333'},
    {selector: '#litIsLiveDate', textColor: '#8fc800'},
    {selector: '#dropdownMenu1', color: '#333', borderColor: '#8fc800'},
    {selector: '#mLabel', textColor: '#8fc800'},
    {selector: '#gvUsers tbody tr th', backgroundColor: '#333'},
    {selector: '#fieldSet1 legend', textColor: 'white'},    
    {selector: '#fldsetAdvanced label', textColor: 'white'},    
    {selector: '#gvLeadUser th', textColor: 'white', backgroundColor: '#333'},
    {selector: '#pnlSearch fieldset', borderColor: '#8fc800'},
    {selector: '#pnl1 fieldset label b', textColor: 'red'},
    {selector: '#pnl1 fieldset>div ', textColor: 'red'},
    {selector: '#SpanPriority', filter: 'invert(100%)'},
    {selector: 'td', backgroundColor: 'black', textColor: 'white'},
    {selector: 'td a', textColor: '#8fc800'},
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
    {selector: '.navigation', color: '#333', borderColor: '#8fc800'},
    {selector: '.checkbox', textColor: 'white'},
    {selector: '#TicketEditValidationSummary ul li', textColor: 'red'},  
];


function applyStyles(element, item) {
    function replaceColor(value) {
      // Replace any instance of '#8fc800' with the selected color
      if (!value) return value;
      return value.replace(/#8fc800/gi, selectedColor);
    }

    if (item.color) {
      element.style.background = replaceColor(item.color);
    }
    if (item.textColor) {
      element.style.setProperty('color', replaceColor(item.textColor), 'important');
    }
    if (item.borderColor) {
      element.style.borderColor = replaceColor(item.borderColor);
      element.style.borderStyle = 'solid';
      element.style.borderWidth = '1px';
    }
    if (item.removeOverflow) {
      element.style.overflow = 'visible';
    }
    if (item.backgroundColor) {
      element.style.setProperty('background-color', replaceColor(item.backgroundColor), 'important');
    }
    if (item.background) {
      element.style.background = replaceColor(item.background);
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
    if (stylesApplied) return; // Prevent re-applying styles
    hideContent();
    targetElementsByIdOrClassWithColorAndStyle(targetElements);
    applyAdditionalStyles();
    revealContent();
    stylesApplied = true;
  }

  function removeStyles() {
    // Remove inline styles applied to elements
    targetElements.forEach(item => {
      const elements = document.querySelectorAll(item.selector);
      elements.forEach(element => {
        // Remove only the styles that were applied
        if (item.color) {
          element.style.background = '';
        }
        if (item.textColor) {
          element.style.color = '';
        }
        if (item.borderColor) {
          element.style.borderColor = '';
          element.style.borderStyle = '';
          element.style.borderWidth = '';
        }
        if (item.removeOverflow) {
          element.style.overflow = '';
        }
        if (item.backgroundColor) {
          element.style.backgroundColor = '';
        }
        if (item.background) {
          element.style.background = '';
        }
        if (item.filter) {
          element.style.filter = '';
        }
        if (item.content) {
          element.style.content = '';
        }
        if (item.width) {
          element.style.width = '';
        }
        if (item.paddingTop) {
          element.style.paddingTop = '';
        }
        if (item.borderRadius) {
          element.style.borderRadius = '';
        }
      });
    });
    // Remove additional styles
    removeAdditionalStyles();
    stylesApplied = false;
  }

  // Function to apply additional styles outside of targetElements
  function applyAdditionalStyles() {
    // Adjusted code to use selectedColor
    var theDamnSendEmailButton = document.getElementById('aLnkSendEmail');
    if (theDamnSendEmailButton) {
      theDamnSendEmailButton.classList.remove('button2');
      theDamnSendEmailButton.style.paddingBottom = '3px';
      theDamnSendEmailButton.style.paddingTop = '3px';
      theDamnSendEmailButton.style.paddingLeft = '3px';
      theDamnSendEmailButton.style.paddingRight = '3px';
      theDamnSendEmailButton.style.border = 'solid 1px';
      theDamnSendEmailButton.style.borderColor = selectedColor;
      theDamnSendEmailButton.style.backgroundImage = "none";
      theDamnSendEmailButton.style.background = "#333";
      theDamnSendEmailButton.style.color = "white";
    }

    var existingStyle = document.getElementById('activeButtonStyle');
    if (existingStyle) {
      existingStyle.remove();
    }

    var active_button = document.createElement('style');
    active_button.id = 'activeButtonStyle';
    active_button.innerHTML = `
      ul.pureCssMenu li.active, ul.pureCssMenu li.active a.active {
        color: ${selectedColor} !important;
      }`;
    document.head.appendChild(active_button);
  }

  function removeAdditionalStyles() {
    // Revert styles applied to the send email button
    var theDamnSendEmailButton = document.getElementById('aLnkSendEmail');
    if (theDamnSendEmailButton) {
      theDamnSendEmailButton.classList.add('button2');
      theDamnSendEmailButton.style.padding = '';
      theDamnSendEmailButton.style.border = '';
      theDamnSendEmailButton.style.borderColor = '';
      theDamnSendEmailButton.style.backgroundImage = '';
      theDamnSendEmailButton.style.background = '';
      theDamnSendEmailButton.style.color = '';
    }

    // Remove the injected style element
    var active_button_style = document.getElementById('activeButtonStyle');
    if (active_button_style) {
      active_button_style.remove();
    }
  }

  const observer = new MutationObserver(mutations => {
    if (!extensionEnabled) return; // Do nothing if the extension is disabled
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

  // Initialize the script
  initialize();
