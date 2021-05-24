Set-Location ./content
Get-Content *.md | pandoc -f markdown -o ../index.html
Set-Location ..
