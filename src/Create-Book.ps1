Set-Location ./content
Get-Content *.md | pandoc -f markdown -o world-in-the-grip-of-an-idea.epub
Set-Location ..
