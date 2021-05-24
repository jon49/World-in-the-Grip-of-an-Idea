(function() {
  var title = document.querySelector(".article-republish-title").innerText
  var date = document.querySelector(".article-date").innerText
  var articleElement = document.querySelector(".article-body-text")

  function stripTags(html, ...args) {
    return html.replace(/<(\/?)(\w+)[^>]*\/?>/g, (_, endMark, tag) => {
      return args.includes(tag) ? '<' + endMark + tag + '>' :'';
    }).replace(/<!--.*?-->/g, '');
  }

  var article = ""
  for (var a of articleElement.querySelectorAll('p')) {
    if (a.querySelector('[style*=navy]')) {
      article += `## ${a.innerText}\n\n`
    } else if (a.innerText.trim().length > 0) {
      if (a.getAttribute("style")?.includes("margin-left")) {
          article += "> "
      }
      article += `${stripTags(a.innerHTML.trim(), 'i', 'b', 'br')}\n\n`
    }
  }

  var main = `# ${title}\n\n${date}\n\n${article}`
  console.log(main)
}())

