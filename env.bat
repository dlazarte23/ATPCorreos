@echo off

set "PATH=%cd%"

del %PATH%\env-config.js
type nul > %PATH%\env-config.js

echo window._env_ = { >> %PATH%\env-config.js

for /f "usebackq delims=\n tokens=*" %%a in ("%PATH%/.env") do (
	for /f "tokens=1,2 delims=\=" %%1 in ("%%a") do (
		echo   %%1: "%%2", >> %PATH%\env-config.js
	)
)

echo } >> %PATH%\env-config.js

