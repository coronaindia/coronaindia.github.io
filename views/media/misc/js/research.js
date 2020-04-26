<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/data.js"></script>
<script src="https://code.highcharts.com/modules/series-label.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/export-data.js"></script>
<script src="https://code.highcharts.com/modules/accessibility.js"></script>
<script src="media/bootstrap/bootstrap-4.3.1/js/bootstrap.min.js" type="text/javascript"></script>
<script>
  function cases(actual_arr, predict_arr, date_arr) {
    Highcharts.chart('container', {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Total COVID19 cases expected during next 7 days'
      },
      xAxis: {
        categories: date_arr
      },
      yAxis: {
        title: {
          text: 'Number of Cases'
        }
      },
      series: [{
        name: 'Prediction',
        data: predict_arr
      }, {
        name: 'Actual',
        data: actual_arr
      }, ],
    });
  }

  function cured(actual_arr, predict_arr, date_arr) {
    Highcharts.chart('container2', {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Total patients expected to be cured during next 7 days'
      },
      xAxis: {
        categories: date_arr
      },
      yAxis: {
        title: {
          text: 'Patients Cured'
        }
      },
      series: [{
        name: 'Prediction',
        data: predict_arr
      }, {
        name: 'Actual',
        data: actual_arr
      }, ],
    });
  }

  function deaths(actual_arr, predict_arr, date_arr) {
    Highcharts.chart('container3', {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Total expected deaths due to COVID19 in next 7 days'
      },
      xAxis: {
        categories: date_arr
      },
      yAxis: {
        title: {
          text: 'Number of Death'
        }
      },
      series: [{
        name: 'Prediction',
        data: predict_arr
      }, {
        name: 'Actual',
        data: actual_arr
      }, ],
    });
  }

  $(document).ready(function() {

    $.get("common-config.html", function(data){
      $("#commonfile").html(data);
    });

    console.log("now running");
    var myurl = 'https://www.menggabungkanpdf.id/get_prediction.php';
    $.ajax({
      type: "get",
      url: myurl,
      dataType: 'json',
      success: function(results) {
        results = JSON.parse(results.response);
        console.log("results are", results);
        $(".waiting").hide();
        cases(results["cases"]["actual"], results["cases"]["predict"], results["cases"]["date"]);
        cured(results["cured"]["actual"], results["cured"]["predict"], results["cured"]["date"]);
        deaths(results["deaths"]["actual"], results["deaths"]["predict"], results["deaths"]["date"]);
      },
      error: function(request, error) {
        console.log("There is an error. " + error);
      },
    });

    $("#questionList li").on("click", function() {
      var question = $(this).html();
      $("#question").val(question);
      searchAnswer();
    })

    // $('#aboutSlider').carousel({
    //     interval: 2000
    // })

  });

  /*automatic question start here*/
  var questionData = [];

  function searchAnswer() {
    console.log("calling search answer")
    var question = document.getElementById("question");
    if ($.trim(question.value) == "") {
      alert("Please enter your question");
      $(question).focus();
      ("#answerFeed").hide();
      $("#aboutAnswerContent").show();
      return;
    }
    console.log("question in ", question.value);
    $("#answerFeed").hide();
    $("#aboutAnswerContent").hide();
    $("#loading").show();
    var myurl = 'https://www.menggabungkanpdf.id/faq1.php?query=' + encodeURI(question.value);
    console.log("url is", myurl);

    $.ajax({
      type: "GET",
      url: myurl,
      dataType: "json",
      success: function(results) {
        console.log("response", results);
        questionData = results.response;
        results = results.response;
        for (data in results) {
          var abstractedText = getHighlightedText(results[data]);
          var title = results[data].title;
          console.log("data is", results[data]);

          console.log("title", title);
          //console.log(date);

          $('#answerFeed').append("<div class='card mr-2 ml-2' style='width: 80rem;'><h6 class='card-title'><br><b>" + title + "</b></h6><div class='card-body'><p class='text-justify'>" + abstractedText +
            "</p><button type='button' onclick=\"openAllDetails('" + data + "')\" class='btn btn-dark text-center' target='_blank'>Read More</button></div></div>&nbsp;");
        }
        $("#answerFeed").unhighlight();
        var questArray = tokenize(question.value);
        for (var i = 0; i < questArray.length; i++) {
          $("#answerFeed").highlight(questArray[i]);
          console.log("tokens are", questArray);
        }
        $("#loading").hide();
        $("#answerFeed").show();
      },
      error: function(results) {
        console.log("There is an error in newsapi. " + results.stringfy);

      },
    });

  }

  function getHighlightedText(data) {
    console.log("data", data);
    var isHighlight = data['highlighted_abstract'];
    var highlightAbs = null;
    data["highlights"][0];
    var highlightPara = null;
    var abstractedText = "";

    if (isHighlight) {
      highlightAbs = data["highlights"][0];
      highlightPara = data["highlights"][1];
    } else {
      highlightPara = data["highlights"][0];
    }

    if (isHighlight) {
      for (var i = 0; i < highlightAbs.length; i++) {
        var temphighlight = highlightAbs[i];
        console.log("highlights are", temphighlight);

        console.log("inside abs");
        //console.log("complete text",data.abstract)
        console.log("temphighlight[0]", temphighlight[0]);
        console.log("temphighlight[0]", temphighlight[1]);
        abstractedText += "..." + data.abstract.substring(temphighlight[0], temphighlight[1]);
      }
    }

    if (typeof highlightPara != 'undefined') {

      for (var i = 0; i < highlightPara.length; i++) {
        var temphighlight = highlightPara[i];
        if (typeof data.paragraphs[i] != 'undefined') {

          console.log("highlights are", temphighlight);
          console.log("complete text", data.paragraphs[i]);
          //console.log("data should be",data.paragraphs[i].substring(temphighlight[0],temphighlight[1]));
          abstractedText += "..." + data.paragraphs[i].substring(temphighlight[0], temphighlight[1]);
        } else {
          abstractedText += "..." + data.paragraphs[i - 1].substring(temphighlight[0], temphighlight[1]);
        }


      }
    }

    return abstractedText;
  }

  function getHighlightedTextArray(data) {

    console.log("data", data);
    var isHighlight = data['highlighted_abstract'];
    var highlightAbs = null;
    data["highlights"][0];
    var highlightPara = null;
    var abstractedText = [];

    if (isHighlight) {
      highlightAbs = data["highlights"][0];
      highlightPara = data["highlights"][1];
    } else {
      highlightPara = data["highlights"][0];
    }

    if (isHighlight) {
      for (var i = 0; i < highlightAbs.length; i++) {
        var temphighlight = highlightAbs[i];
        abstractedText.push(data.abstract.substring(temphighlight[0], temphighlight[1]));
      }
    }

    if (typeof highlightPara != 'undefined') {

      for (var i = 0; i < highlightPara.length; i++) {
        var temphighlight = highlightPara[i];
        if (typeof data.paragraphs[i] != 'undefined') {
          abstractedText.push(data.paragraphs[i].substring(temphighlight[0], temphighlight[1]));
        } else {
          abstractedText.push(data.paragraphs[i - 1].substring(temphighlight[0], temphighlight[1]));
        }


      }
    }

    return abstractedText;
  }


  function openAllDetails(index) {

    var question = document.getElementById("question").value;
    var data = questionData[index];
    var abstractedTextArr = getHighlightedTextArray(data);
    var authors = data.authors;
    var title = data.title;
    var abstract = data.abstract;
    var paragraphs = data.paragraphs;
    var url = data.url;
    var authHtml = "";
    var paragraphHtml = "";

    for (var i = 0; i < authors.length; i++) {
      authHtml += "&nbsp;<span class='badge badge-danger'>" + authors[i] + "</span>";
    }
    for (var i = 0; i < paragraphs.length; i++) {
      paragraphHtml += "<p class='text-justify'>" + paragraphs[i] + "</p>";
    }
    paragraphHtml += "Read complete <a href='" + url + "' target='_blank'>here</a>";

    $("#questionTitle").html(title);
    $("#authors").html(authHtml);
    $("#abstract").html(abstract);
    $("#paragraphs").html(paragraphHtml);

    for (var i = 0; i < abstractedTextArr.length; i++) {
      $("#questionModal").highlight(abstractedTextArr[i]);

    }

    var questArray = tokenize(question);
    $("#questionModal").unhighlight();
    for (var i = 0; i < questArray.length; i++) {
      $("#questionModal").highlight(questArray[i]);
    }
    $("#questionModal").modal("show");
  }


  function tokenize(text) {
    var results = [];
    var words = text
      .toLowerCase()
      .replace('-', ' ')
      .replace('.', ' ')
      .replace(',', ' ')
      .replace('?', ' ')
      .split(' ');

    words.forEach((word) => {
      if (!GRAM_WORDS.includes(word)) {
        results.push(word);
      }
    });
    return results;
  }
  //highlight script
  jQuery.extend({
    highlight: function(e, t, n, i) {
      if (3 === e.nodeType) {
        var r = e.data.match(t);
        if (r) {
          var a = document.createElement(n || "span");
          a.className = i || "highlight";
          var h = e.splitText(r.index);
          h.splitText(r[0].length);
          var s = h.cloneNode(!0);
          return a.appendChild(s), h.parentNode.replaceChild(a, h), 1
        }
      } else if (1 === e.nodeType && e.childNodes && !/(script|style)/i.test(e.tagName) && (e.tagName !== n.toUpperCase() || e.className !== i))
        for (var l = 0; l < e.childNodes.length; l++) l += jQuery.highlight(e.childNodes[l], t, n, i);
      return 0
    }
  }), jQuery.fn.unhighlight = function(e) {
    var t = {
      className: "highlight",
      element: "span"
    };
    return jQuery.extend(t, e), this.find(t.element + "." + t.className).each(function() {
      var e = this.parentNode;
      e.replaceChild(this.firstChild, this), e.normalize()
    }).end()
  }, jQuery.fn.highlight = function(e, t) {
    var n = {
      className: "highlight",
      element: "span",
      caseSensitive: !1,
      wordsOnly: !1
    };
    if (jQuery.extend(n, t), e.constructor === String && (e = [e]), e = jQuery.grep(e, function(e, t) {
        return "" != e
      }), 0 == (e = jQuery.map(e, function(e, t) {
        return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
      })).length) return this;
    var i = n.caseSensitive ? "" : "i",
      r = "(" + e.join("|") + ")";
    n.wordsOnly && (r = "\\b" + r + "\\b");
    var a = new RegExp(r, i);
    return this.each(function() {
      jQuery.highlight(this, a, n.element, n.className)
    })
  };

  //GRAMMER WORDS
  var GRAM_WORDS = [
    'i',
    'me',
    'my',
    'myself',
    'we',
    'our',
    'ours',
    'ourselves',
    'you',
    'your',
    'yours',
    'yourself',
    'yourselves',
    'he',
    'him',
    'his',
    'himself',
    'she',
    'her',
    'hers',
    'herself',
    'it',
    'its',
    'itself',
    'they',
    'them',
    'their',
    'theirs',
    'themselves',
    'what',
    'which',
    'who',
    'whom',
    'this',
    'that',
    'these',
    'those',
    'am',
    'is',
    'are',
    'was',
    'were',
    'be',
    'been',
    'being',
    'have',
    'has',
    'had',
    'having',
    'do',
    'does',
    'did',
    'doing',
    'a',
    'an',
    'the',
    'and',
    'but',
    'if',
    'or',
    'because',
    'as',
    'until',
    'while',
    'of',
    'at',
    'by',
    'for',
    'with',
    'about',
    'against',
    'between',
    'into',
    'through',
    'during',
    'before',
    'after',
    'above',
    'below',
    'to',
    'from',
    'up',
    'down',
    'in',
    'out',
    'on',
    'off',
    'over',
    'under',
    'again',
    'further',
    'then',
    'once',
    'here',
    'there',
    'when',
    'where',
    'why',
    'how',
    'all',
    'any',
    'both',
    'each',
    'few',
    'more',
    'most',
    'other',
    'some',
    'such',
    'no',
    'nor',
    'not',
    'only',
    'own',
    'same',
    'so',
    'than',
    'too',
    'very',
    's',
    't',
    'can',
    'will',
    'just',
    'don',
    'should',
    'now',
  ];
  /*automatic question ends here*/
</script>
