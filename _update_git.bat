
@ECHO OFF

REM check time and date
for /f "delims=" %%a in ('date/t') do @set mydate=%%a
for /f "delims=" %%a in ('time/t') do @set mytime=%%a
set fvar=%mydate%%mytime%

REM add commit
call git add .
call git commit -a -m "Commit Project_Name - %fvar%"
