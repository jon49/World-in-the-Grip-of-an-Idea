Set-Location ./content
Get-Content *.md | pandoc -f markdown -o ../README.md
Set-Location ..
