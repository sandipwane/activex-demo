# Installing node module winax

The module is Windows C++ Node.JS addon, that implements COM IDispatch object wrapper, analog ActiveXObject on cscript.exe

When installing this module it needs to compile some native Node modules post download. So a few dependencies (to compile native modules) must be installed before installing this module. 
Those dependencies are 

- Windows Build Tools
- Python
- .NET Framework 4.5.1

__Note :__  For Windows 7 ot Vista .NET Framework 4.5.1 must be installed separately.

Microsoft has created a node module called "windows-build-tools" just for this purpose which downloads and installs Windows Build Tools and Python.

## Installation Steps

- Run Power Shell with admin rights
- Run command
	```{r, engine='bash', count_lines}
	npm --add-python-to-path='true' --debug install --global windows-build-tools@1.3.2	
	```
- After Successful installation change npm config by running command. 
	```{r, engine='bash', count_lines}
	npm config set msvs_version 2015 --global	
	```
- Close all running instances of command prompt or power shell. Open new instance of command prompt and run command to install winax module
	```{r, engine='bash', count_lines}
	npm install winax
	```

Ideally above two steps should finish installation.  

### Facing problem with Python installation

- If facing such problem remove any previous installation of Python from machine.
- Remove %USERPROFILE%\.windows-build-tools\
- Run command 
	```{r, engine='bash', count_lines}
	npm --add-python-to-path='true' --debug install --global windows-build-tools@1.3.2
	```
