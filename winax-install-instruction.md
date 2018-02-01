# Installing node module winax

	The module is Windows C++ Node.JS addon, that implements COM IDispatch object wrapper, analog ActiveXObject on cscript.exe

	When installing this module it needs to compile some native Node modules post download. So a few dependencies (to compile native modules) must be installed before installing this module. 
	Those dependencies are 
		- Windows Build Tools
		- Python
		- .NET Framework 4.5.1 (Not installed automatically by windows-build-tools npm package)
	Note: For Windows 7 ot Vista .NET Framework 4.5.1 must be installed separately.
	Microsoft has created a node module just for this purpose which is called "windows-build-tools" which downloads and installs Windows Build Tools and Python.

	Steps for installing 
		- Run Power Shell with admin rights
		- Enter command  
			- npm --add-python-to-path='true' --debug install --global windows-build-tools@1.3.2

	Ideally above two steps should finish installation.  

	Facing problem with Python installation
		- If facing such problem remove any previous installation of Python from machine.
		- Remove %USERPROFILE%\.windows-build-tools\
		- Run command npm --add-python-to-path='true' --debug install --global windows-build-tools@1.3.2 again.
