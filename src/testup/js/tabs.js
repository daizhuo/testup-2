/*******************************************************************************
 *
 * module TestUp.Tabs
 *
 ******************************************************************************/

var TestUp = TestUp || {};

TestUp.Tabs = function() {

  // Public
  return {


    init :  function() {
      var $tabs = $('<div id="tabs"/>');
      $('body').append($tabs);

      $(document).on('click', '#tabs .tab', function() {
        var $tab = $(this);
        assert($tab.length);
        select_tab($tab);
      });
    },


    add : function(tab_text) {
      var $tabs = $('#tabs');
      var $tab = $('<div class="tab" />')
      $tab.text(tab_text);
      $tabs.append($tab);
      return $tab;
    },


    count : function() {
      return $('#tabs .tab').length;
    },


    get : function(tab_text) {
      return $('#tabs .tab:contains(' + tab_text + ')');
    },


    select : function(tab_text) {
      var $tab;
      if (tab_text == null)
      {
        $tab = $("#tabs .tab").first();
      }
      else
      {
        $tab = TestUp.Tabs.get(tab_text);
      }
      assert($tab.length);
      select_tab($tab);
      return $tab;
    },


    selected : function() {
      return $("#tabs .tab.selected").text();
    }


  };

  // Private

  function select_tab($tab) {
    $('#tabs .tab').removeClass('selected');
    $tab.addClass('selected');
  }

}(); // TestUp.Tabs
