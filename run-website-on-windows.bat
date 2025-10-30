@echo off
REM ==============================
REM  Jekyll on Windows
REM  Yutian Zhang's Webpage
REM  bundle exec jekyll
REM ==============================

echo Running jekyll
echo http://localhost:4000
echo Enter Ctrl+C to stop

REM Start Jekyll service
bundle exec jekyll serve -l -H localhost
pause
