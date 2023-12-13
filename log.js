/* 
    Title: Fibr Console Logging
    Description: Functions that help log to the console easier and more efficient.
    Developed by: byronbytes
    Last Updated: 12/13/23
*/

function logLoad() {
     setTimeout(console.log.bind(console, "%cAll assets have loaded. %c", "background: #3F51B5;color:#FFF;padding:5px;border-radius: 5px;line-height: 26px; font-family: 'Verdana'", ""));
}

function logWarning() {
   setTimeout(console.log.bind(console, "%cA L E R T ! %c \n \n It appears you have opened the developer console. If you do not know what this is, you can close it. If you know what you are doing, come help us develop Fibr! https://discord.gg/hxdFKStn2u", "background: #ff0000;color:#FFF;padding:15px;border-radius: 4px;line-height: 46px; font-family: 'Verdana'; font-size: 50px;", ""))
}

function logCustom(message)
{
    setTimeout(console.log.bind(console, message, "background: #3F51B5;color:#FFF;padding:5px;border-radius: 5px;line-height: 26px; font-family: 'Verdana'", ""));
}

function logDeveloperMode()
{
      setTimeout(console.log.bind(console, "%cDeveloper mode has been enabled.%c", "background: #a134eb;color:#FFF;padding:5px;border-radius: 5px;line-height: 26px; font-family: 'Verdana'", ""));
}
