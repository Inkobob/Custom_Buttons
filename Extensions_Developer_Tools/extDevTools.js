﻿// http://infocatcher.ucoz.net/js/cb/extDevTools.js

// Extensions Developer Tools button for Custom Buttons
// (code for "initialization" section)

// (c) Infocatcher 2011-2012
// version 0.1.0pre11 - 2012-08-06

// Includes Attributes Inspector
// http://forum.mozilla-russia.org/viewtopic.php?pid=470532#p470532
// http://infocatcher.ucoz.net/js/cb/attrsInspector.js

// Icon: http://www.iconfinder.com/icondetails/22560/16/gear_preferences_settings_tool_tools_icon

// Screenshots:
// http://infocatcher.ucoz.net/js/cb/extDevTools-en.png
// http://infocatcher.ucoz.net/js/cb/extDevTools-ru.png

var options = {
	locales: ["ru", "en-US"]
};
var images = {
	// Fugue Icons by Yusuke Kamiyamane, http://www.iconfinder.com/icondetails/25550/16/applications_blue_icon
	reopenWindow: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAZtJREFUeNqUk79Lw1AQxy/pxUqFoLZg7SAiFqy6OOlWxFnByUFwcXBT8B8RJ3HRzdHF3f9ApEPRgoMIKo2VUK22fS8v8e6lEQc16cGXHO/H993n8p5RPqlDFIZhrNBnj1SA+HgiHSJnge/rkYA2L85my6NDaCupwBMKBKnt+fBOk68pA+pWCupphG5XFadqLiCdCmCaoKRkj0Kz0bJdxwefTD3PA6WUFueUQI40TDnN29cPzQL2SgccGKASAjheHYGksXzqABt8c1OVpZ0Ll3yCXzfkMiaszwzCQh71oVwV+kol5rYYp9qC+WyGqE1aK7RBP9xwRb0SS0VARJBsgJbVF/f2uUMVCo0pOx3A6MS/uH9GxC1EoHOhDcjN65UXF8ytuHGY1gbddhtQ9gw0b0wwd+Xe/Zzer97oi9eoVZA5JDVGhhfp32BMw/fuWmeba+HFhTeTOUIuESteJ6WSE1tH/A6eSR8mc+ibSOXFKeJOjZUgv3EQYjmVy8rk7mPi38jc/sutzq3xOaCXBBmSzU1Osp+5ufRo4EuAAQB5oyk+Ipyd+wAAAABJRU5ErkJggg==",
	// Fugue Icons by Yusuke Kamiyamane, http://www.iconfinder.com/icondetails/11449/16/135_arrow_circle_double_icon
	restart: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAuZJREFUeNqkU0lPU1EUPvcNHaCUWlpsERGooIhxwQPFSNUgKpEYTRQXhpi44g+48W8YFy7cmOgC4hRjDEGjosEQpQRRKQQoFmgZSqGldHrDvZ7XohJWJr7kyx3e/b57vnPOJYwx+J9POHpnJj8RRRAEATietxFCvLh1CtGEKERMIQbxsqeU0jDP81249r67Wdot7BCsFjh2rarMfKS81FxnLRSqcc+aSKp1C6uZlpn55BXK2KCmqu2/CdwfKmNug8C8HcedrspSs9VAiFGRKegQCSnY5zCVn29ynFaR3HnGLeGYj5xqGmDIBgJa3blGl3U9mgGNAzoRjIfmllIR3UKFq9DWULvLE19X4LLXJW3Esygs5wU0RdHHkkqX1RJdSQLlCXnzOTyOoh84QXil4sFAMHs3EFxrvtpWKS0vxMFiNYKazeYF5PzEYi8QDHJWod/nY4uo3k8IjKiplB5dF6L5eketlIhlQDTorhnIvwX0G9C/YjbyEVXVVoNz0YRGtZG8NQ5EUfTqpX7wZMy3PdsomlsL6WRSX9x+/vqHtLPGlKk+JHdj2SB3ESFSq/dAkYil6ns7HvwbAYDUfrFJSmXymS0pNsKzx0M+FP6Idc+RRYOhYXeZ/Ww0QxNUTi8r2Ww4J6BseVnMAKwmGFQ4TND7aEAPbwjJDzW0gg12AfNy0uHZa46CkEyFF2XkbW5PIsR5A9icJhiLKVBzqVVa+TJmi8yGhvFXsniPQ3bW16TDnCngLhLAPzW/qSlqdLsFMFpM8Olej6/yRqc0LzPgpUaP+5jeybCRUVkoRFnAVciBr+flhpJM+7Hlc0TCOQ8C33JreCtvfcRoPOE4XLtf9FTZid1eoAuw6FpAnp7xx/zTY8rCt146+SJAVyZAr45AIxPlsOwfh2x8lPruD3Clh94v/WxrgZKaeuBE/S1sgpr5Cqv+UTbdP8nWZ02450SsITSiPxaEqNtB8P/wgvXWTSHSGAH9JcAAMrRspwHKXNQAAAAASUVORK5CYII=",
	// Tango icons, http://www.iconfinder.com/icondetails/15273/16/
	cleanAndRestart: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKXSURBVDiNlZJLaJRnFIaf75uZ6EwSm9tIQpNIvNWoFCsmiwrSgotKS3aCl4WL0Y2CIvwLBV0YFwYckFIQhI7GhWBLdaEL6Y0WMS20aTQxijGNmnFGSZPJZcw/80/+//uOK0VjIfisz/twzstRR75gczjEBRGixrL31A35kfdAhzTfr22OrdqworwxpLl6dJva+l4CYHFFVLO0KsLHLbFYSHP29H6lU0nVmUqq2gUFVugcfFJ0fSPU15QRXazqqxrpBY4DSxcUiPCN65mLtwbz7kzJp6mdypWtGzfE400vgLqFBEpEAOjap07EV3L8k7bPVXNLOz2nu73pf8Zy7FSTxsglEc4nHBn/X0EqqXZprb79dHNHtK6ugX+//punVx+y/ux2atdVkR7t9+7f/UOM9b4zRo4lHMnOF+zRmmRTfWs5lyRqJl22dG9lUY0GFYVQNX5Qzr3BX/2B/t8N4v9gDCng5usTUkm1KHKOOxXNtas6Lh8Oaf0cQg1gxsBksUEez7bgzdWQyQzI45EBd2oyW9SvVkk4UvJ301V7sLGkI2VgZyEYAZMF8x9e4RmzuevMjJ0jXo3a1P5VhVZKwm81UsHP2UxaW6tQ/ggiPv6ch1eapViYoVCYRkTQ4UrST3oDlPym38wnHHnmz02PpNN3mXFjTEyMksulmcxlcN0pRIRY9TYKRc3Qg/6SMThvCQACI4f6en8p+qzGdT2KxTzWBuhwDZXxHeTdmNy6eSVvTPBlwpHM6xLfpPuM6ln9UXvb8hWtES//J2WxNejIMh4N9wRDQ33j1vJZwpGHAOF30oAxdAw9+Ot25ZKGDz+oatOjo/f84eGfAmu869ZyIOHIxDufOJ9UUi1Tij6lEOCatZxMOPJ4/txLfgdDCCiEEtoAAAAASUVORK5CYII=",
	// Flags by Mark James
	// http://www.iconfinder.com/icondetails/4778/16/america_american_flag_united_states_of_america_us_icon
	// http://www.iconfinder.com/icondetails/4737/16/ru_russia_icon
	switchLocale: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sHDAoNI1aFrw0AAAH0SURBVDjL3ZK/S9VhFMY/7/dejcrJIBKhC2ltjUVLVINZDU0t/VwMXFpcukFQQ7chaGgKiQYLIsegDIQSCReVhiiLDLmgKKm3uqnde7/vOe97Gr5K2D8Q9MCHc3jgOcPhgX8t19M7ZpucGCEq4AEDPA8Kr7DaLyrLXzO3Yz/JyQuEpBl6escsxmCPR9XEvD0aURMRe/haLU0b1j+s5n1qaZpao1G3ev0P5fKyuZ7eMTty9hBP30RChBDBqxEs2xtqvOU6fK8SDx4gXLqIOYdzjoWFFfIgWIRnReP4bcfLotBVyjN0tcbR0lamHNRu3GR8PGFiIofeNVSN1lbo64vkiTkAum85YjS6SnlUyMKk6Nok90/XGKx2IWJ4b4gYhUL2soRY49xhI0TjRbGBCgwVV/gQv/HlygodH/cyWO3Cr4c3UAWIJGAMjDpU4VhpC16NXaUatvaJ7vM5Wn7uzELp5gMiBkTc7OyMtbXtRkSIMWJmyI9V5q/1U58qE0WIXoiiRK8EEaIGtu9p5/m7J+TbB+7hTpwhGRrBFhexSoWmuTk663VMBPM+mxu7CmjAhU52JA43Pf3eCoV9rDY10VKegTt3YWkREwERTDULq2aEAOtUpj/j5i+fsmDglqpsG54EL1kh/0LzOTRxRCCsl1ab8/wH+g3SxWVrARSXnQAAAABJRU5ErkJggg==",
	// http://www.iconfinder.com/icondetails/29415/16/exit_system_xfce_icon
	saveSessionAndExit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH1goUDSQ2q/JqlwAAAlZJREFUOMulkz9PU2EUxn/vvbe3rf2DpVyQ2MZYtKKRhNEPgH9CgokLAT8ADsYQHcQPwOCgMW4kDjIpCQtKXJRRBBaDkUGCbQcFsSmkFNpLafseBwgKNTj4Jmd5z5PfOU9yHiUi/M+zDn8opcxoNHo5mUzGRATDMFBKobVGa02tphGB1dUfm8vL398gInXV29v/rFoVyeU2ZG2tIOvrBcnl8pLN5mVlJSeFwo4MDz+cBYJ/20B1d19nZuYjIyNP8Pv9WNaubGzsJSLCxMQ7XHenClh1ABGRrp4btZoIbW0J+vr78Nk+AEZHn6PUvg4A4zDAVMqTyOWilVIJfzCIE20i6uxWPB7HcZyjAQInBzJLV9WLURDB8HjYG0ok0khjY/RowCnweR0n0L5TpCuVolLTVLTmw/R75uZmCQSOHdAbAK+93sl0PD7/LRabH4/FXgVMU/l8fuKZDMXHj9BKUdjaYuDWwL4FrfXvO/A0NFyK9PQ0VbTmnGFQ3diglkrhsW2CU1PUDJNrQ/dJpzJYpnXAggVgFIvl6vQ02nUpuy6qXMasVGB7G7taZTlynDjQfr6dUnGzHlB2XdlaWEBrjQ2E9xo28Lmjg+ztO7ipr7Q4DpFIZM/CH4CbIg9MkQRQboATn2AwAMZiZyeZoSHakmextebMhYuk02kAwuGQB9BKRFBKmYAJEIQrBcuafCuyc6+1dcZobl4Keb21UCisbNvezufzXqWM09nsz+XFxS9P63LgVSpxNxwebzXNQSB6uA8ooAVoBfzqcJyVUjYQAkoi4v4rzr8AOtoq54WTN98AAAAASUVORK5CYII=",
	// https://addons.mozilla.org/firefox/addon/console%C2%B2/
	errorConsole: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAz1JREFUeNpMU11oVEcYPTP33uy9m5sN5gdLtYkvgjQgaEKVPBgoxR9okCoV7Yu1T30vFEqlFYUgYi1U+lRqiZZKIxFjobUtJoYm0RcRi1KtQRKzu7nJ7ia7m937s/fOTL+7WyUD8zDDnHO+75z5mFIK61d8ruRXWhUUB1j9jjEGKQQ0ziu1hBG2pVKv3uvrwaHn4t7Zc4dEduG8aScTxAb1P0HkVpF/Mvv45/TiRx//9GN6YNeuBvnLCkQY4s7nJ4805dLf9/Vus/WgQpcCiOJdAzcM5Moefrv2x4Ph3Oqhz26Oze0bGGgQhJ6HyS9PHU0sL/zQ+1aPyZbTkKSoogiu69V5LBXB7OhEVTfxy8jv94czy4dPT9yeZwRm00NDB9ncsyt9u3ts5DJ1MJPkRdUD238E2mubEVy+iJZSHlrnRlSaLNwavf1gxI8Oc7/qpkT6xTd9O7fazFmArFLpUkL5PqpGEvaevTDf6EawViEvNARODpbr4uB7b+9oK5dPcikVt5qThrFWgCgXqd+IdghVC4BmGyyRwNLYCMzCIiSZLCtVuE+fo8kPoCetFKWgKKJIyoDMDGsA16DCiMhK4O2bEORzCG6Noq1SRkh3IqREPIGovTUOXTayjpOIVclMuVKAzDkQTpYUbJTu3kGzMx+7DUnFSTJUyFi28Uf0OERFYLm6ArnkNPjIwBigiEhmXsCmN5GsW1NPREhW14z/h67oFJaKCd5CPVPfisd/S8HnBtzZJ7Cob6YlCMga6oIq4QRMaLFIEzd07hed/MOCbkNv7wAjklqRzHz/BLaM3UXUtRVh1afeY38VIsXQ2tMNxw9R8WuPdE/j7rXF5ePFbObGu/v6epMigj/vwZuZxvN//oUxOwulmQhDBRIncBcKzMCViYeXfi2uXmDkP8anpjA0OLjleOeG6wfe2bnDdDJYezaHKBDQLRsCHJJxpN7sJrCOyxN/f/ets/gpOtqLr2ZhfGYGZ/bu7/7w9Y7RwT3bey1qRZCZikqOzdNNHUteDcN/Pbr0VTb7SWhZpanJScXWj/P49DQuHPuga6PnfaF03vJylBtTB+o5ePpnufy1tXnT6sjVq+jv78d/AgwAz5rMGbA9L4wAAAAASUVORK5CYII=",
	// nuove by Alexander Moore, http://www.iconsearch.ru/detailed/278/1/
	attrsInspector: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACW0lEQVQ4jW2TQUsbQRiG3/l2ui4hPaSbCBZPsR6kMXrwYP9AK+JJKOJZKPgD1KMXf0ELPffsoRDpxUv2aLUHKamHikJxi1gQktXNzrqbna+HJJPE9oNhGJh55n3f+UYwM7a2tuzNzc13RETMTADAzOjN/bVGr7Isw+rq6vuzszMtAWB8fDxXKBQ+EBHSNIXWGpZlGYgQAkIIEBGEENBaw3XdjwASCQCO41Cr1YLv+8jlchBCIAxDFItFlEolc5CZDaxarUoDsG3nme//xuLiK3NDlmmcn/9EEAQoFAp4XBMTExIACAB8/2ppbm4OzAytu1YtizA19QI3Nzf/HBZCoFgsSgCQXdrz6bSjIZIEJGhkY5p2Rtb9yufztlHQaDR81hpRO0a7raDUA1T8gLCtcHd3Z3wPB+o4DhnA/X3wpV73kKYdPCQJokihHUb40WjAdV0T4jDEtu2BhbW1tbhUKuHgoIby1DSeSImLi3Ocnn7DwsICZmcrBtCHSCkHCpgZlUoF6+tv8TRvQ4gUKytL2N7eRr1eR61WGwH0eoKMAgDUk4X5+Xkws2mi3d1d7O3twXEcLC8v97pTQAgxUNAHDHskIhARJicnsbOzA8/z4HketGZkWpvnpu6bW3I4qMejXC5jY2MDx8fHODr6CtYZkiQZAIiIhrz9FzIz8xKv3yzh6uoXpLRwcnISoh/g4eFhNY5jVkqxUoqjKBoZYdjmZjPgZrPFSim+vLz87rquw8zdEJVSrevr60+9L6uZWQshNDNrZuhMs+50Eu2MjSVBEPzZ39//fHt7GwPAX9zKMQVPs/QoAAAAAElFTkSuQmCC"
};

function _localize(s, key) {
	var strings = {
		"Reopen window": {
			ru: "Переоткрыть окно"
		},
		reopenWindowKey: {
			ru: "о"
		},
		"Restart": {
			ru: "Перезапустить"
		},
		restartKey: {
			ru: "П"
		},
		"Clean and restart": {
			ru: "Сбросить кэш и перезапустить"
		},
		cleanAndRestartKey: {
			ru: "С"
		},
		"Switch locale to “%S”": {
			ru: "Переключить локаль на «%S»"
		},
		switchLocaleKey: {
			ru: "л"
		},
		"Save session and exit": {
			ru: "Сохранить сессию и выйти"
		},
		saveSessionAndExitKey: {
			ru: "в"
		},
		"Error console": {
			ru: "Консоль ошибок"
		},
		errorConsoleKey: {
			ru: "К"
		},
		"Attributes Inspector": {
			ru: "Инспектор атрибутов"
		},
		attrsInspectorKey: {
			ru: "И"
		},
		"Options": {
			ru: "Настройки"
		},
		optionsKey: {
			ru: "Н"
		},
		"Show errors in chrome files": {
			ru: "Показывать ошибки в chrome-файлах"
		},
		"Show strict warnings": {
			ru: "Показывать строгие предупреждения"
		},
		"Show strict warnings in debug builds": {
			ru: "Показывать строгие предупреждения в тестовых сборках"
		},
		"Show all exceptions": {
			ru: "Показывать все исключения"
		},
		"Show information about extensions update": {
			ru: "Показывать информацию об обновлении расширений"
		},
		"Enable window.dump()": {
			ru: "Включить window.dump()"
		},
		"Disable XUL cache": {
			ru: "Отключить кэш XUL"
		},
		"Enable E4X for chrome": {
			ru: "Включить E4X для chrome"
		},
		"Enable E4X for content": {
			ru: "Включить E4X для content"
		}
	};
	var locale = (cmds.getPref("general.useragent.locale") || "en").match(/^[a-z]*/)[0];
	_localize = !locale || locale == "en"
		? function(s) {
			return s;
		}
		: function(s, key) {
			if(!key)
				key = s;
			return strings[key] && strings[key][locale] || s;
		};
	return _localize.apply(this, arguments);
}

this.onmouseover = function(e) {
	if(e.target != this)
		return;
	Array.some(
		this.parentNode.getElementsByTagName("*"),
		function(node) {
			if(
				node != this
				&& node.namespaceURI == xulns
				&& node.boxObject
				&& node.boxObject instanceof Components.interfaces.nsIMenuBoxObject
				&& node.open
			) {
				node.open = false;
				this.open = true;
				return true;
			}
			return false;
		},
		this
	);
};

var cmds = this.commands = {
	options: options,
	button: this,
	get ss() {
		return (
			Components.classes["@mozilla.org/browser/sessionstore;1"]
			|| Components.classes["@mozilla.org/suite/sessionstore;1"]
		).getService(Components.interfaces.nsISessionStore);
	},
	get canReopenWindow() {
		var ss = this.ss;
		delete this.canReopenWindow;
		return this.canReopenWindow = ss && "getWindowState" in ss && "setWindowState" in ss;
	},
	reopenWindow: function() {
		const flag = "__customButtonsReopeningFlag";
		if(flag in window)
		  return;
		window[flag] = true;

		this.button.disabled = true;

		var ss = this.ss;
		var state = ss.getWindowState(window);

		var win = OpenBrowserWindow();
		win.addEventListener("load", function restoreSession() {
			win.removeEventListener("load", restoreSession, false);
			ss.setWindowState(win, state, true);
			window.close();
		}, false);
	},
	restart: function() {
		const pId = "browser.tabs.warnOnClose";
		var woc = this.getPref(pId);
		if(woc != undefined)
			this.setPref(pId, false);
		if("Application" in window && "restart" in Application)
			Application.restart();
		else {
			var appStartup = Components.interfaces.nsIAppStartup;
			if(canQuitApplication())
				Components.classes["@mozilla.org/toolkit/app-startup;1"]
					.getService(appStartup)
					.quit(appStartup.eAttemptQuit | appStartup.eRestart);
		}
		if(woc != undefined)
			this.setPref(pId, woc);
	},
	cleanAndRestart: function() {
		var xr = Components.classes["@mozilla.org/xre/app-info;1"]
			.getService(Components.interfaces.nsIXULRuntime);
		if("invalidateCachesOnRestart" in xr)
			xr.invalidateCachesOnRestart();
		else {
			var profile = Components.classes["@mozilla.org/file/directory_service;1"]
				.getService(Components.interfaces.nsIProperties)
				.get("ProfD", Components.interfaces.nsIFile);
			var eal = Components.classes["@mozilla.org/uriloader/external-helper-app-service;1"]
				.getService(Components.interfaces.nsPIExternalAppLauncher);
			[
				"XUL.mfl",
				"XPC.mfl",
				"xpti.dat",
				"compreg.dat",
				// It's important to leave extensions.rdf - it stores information about disabled extensions
				"extensions.cache",
				"extensions.ini",
				"startupCache/startupCache.4.little"
			].forEach(function(path) {
				var file = profile.clone();
				path.split("/").forEach(function(name) {
					file.append(name);
				});
				eal.deleteTemporaryFileOnExit(file);
				try {
					file.remove(true);
				}
				catch(e) {
				}
			});
		}
		this.restart();
	},
	switchLocale: function(onlyGet) {
		const localePref = "general.useragent.locale";
		var prefs = this.prefs;
		var locale = this.getPref(localePref);
		var locales = this.options.locales;
		var i = locales.indexOf(locale);
		if(i == -1 || ++i >= locales.length)
			i = 0;
		locale = locales[i];
		if(onlyGet)
			return locale;
		this.setPref(localePref, locale);
		this.restart();
		return locale;
	},
	get canSaveSessionAndExit() {
		delete this.canSaveSessionAndExit;
		return this.canSaveSessionAndExit = this.ss
			&& this.getPref("browser.sessionstore.resume_session_once") != undefined;
	},
	saveSessionAndExit: function() {
		//~ todo: browser.showQuitWarning, browser.tabs.warnOnClose, browser.warnOnQuit - ?
		var woq = this.getPref("browser.warnOnQuit");
		if(woq != undefined)
			this.setPref("browser.warnOnQuit", false);
		/*Application.quit()*/goQuitApplication() && this.setPref("browser.sessionstore.resume_session_once", true);
		if(woq != undefined)
			this.setPref("browser.warnOnQuit", woq);
	},
	openErrorConsole: function() {
		if("toErrorConsole" in window) {
			toErrorConsole();
			return;
		}
		if("toJavaScriptConsole" in window) {
			toJavaScriptConsole();
			return;
		}
		var w = Components.classes["@mozilla.org/appshell/window-mediator;1"]
			.getService(Components.interfaces.nsIWindowMediator)
			.getMostRecentWindow("global:console");
		if(w) {
			w.focus();
			return;
		}
		window.openDialog(
			"chrome://global/content/console.xul",
			"_blank",
			"chrome,all,centerscreen,resizable,dialog=0"
		);
	},
	attrsInspector: function() {
		this.button.attrsInspector();
	},
	get isDebugBuild() { //~ todo: find another way
		delete this.isDebugBuild;
		return this.isDebugBuild = this.getPref(
			"general.warnOnAboutConfig",
			true,
			this.prefSvc.getDefaultBranch("")
		) == false;
	},
	get canDisableE4X() {
		delete this.canDisableE4X;
		return this.canDisableE4X = this.getPref("javascript.options.xml.chrome") != undefined;
	},
	initPrefsMenu: function(popup) {
		Array.forEach(
			popup.getElementsByAttribute("cb_pref", "*"),
			function(node) {
				var pref = node.getAttribute("cb_pref");
				node.setAttribute("checked", this.getPref(pref));
			},
			this
		);
	},
	doPrefsMenuCommand: function(node) {
		var pref = node.getAttribute("cb_pref");
		this.setPref(pref, node.getAttribute("checked") == "true");
	},

	get prefSvc() {
		delete this.prefSvc;
		return this.prefSvc = Components.classes["@mozilla.org/preferences-service;1"]
			.getService(Components.interfaces.nsIPrefService)
			.QueryInterface(Components.interfaces.nsIPrefBranch2 || Components.interfaces.nsIPrefBranch);
	},
	getPref: function(pName, defaultVal, prefBranch) {
		var ps = prefBranch || this.prefSvc;
		switch(ps.getPrefType(pName)) {
			case ps.PREF_STRING: return ps.getComplexValue(pName, Components.interfaces.nsISupportsString).data;
			case ps.PREF_INT:    return ps.getIntPref(pName);
			case ps.PREF_BOOL:   return ps.getBoolPref(pName);
			default:             return defaultVal;
		}
	},
	setPref: function(pName, pVal) {
		var ps = this.prefSvc;
		var pType = ps.getPrefType(pName);
		var isNew = pType == ps.PREF_INVALID;
		var vType = typeof pVal;
		if(pType == ps.PREF_BOOL || isNew && vType == "boolean")
			ps.setBoolPref(pName, pVal);
		else if(pType == ps.PREF_INT || isNew && vType == "number")
			ps.setIntPref(pName, pVal);
		else if(pType == ps.PREF_STRING || isNew) {
			var str = Components.classes["@mozilla.org/supports-string;1"]
				.createInstance(Components.interfaces.nsISupportsString);
			str.data = pVal;
			ps.setComplexValue(pName, Components.interfaces.nsISupportsString, str);
		}
	}
};

this.appendChild(parseXULFromString('\
	<menupopup xmlns="' + xulns + '">\
		<menuitem cb_id="reopenWindow"\
			oncommand="this.parentNode.parentNode.commands.reopenWindow();"\
			hidden="' + !cmds.canReopenWindow + '"\
			label="' + _localize("Reopen window") + '"\
			accesskey="' + _localize("w", "reopenWindowKey") + '"\
			class="menuitem-iconic"\
			image="' + images.reopenWindow + '" />\
		<menuitem cb_id="restart"\
			oncommand="this.parentNode.parentNode.commands.restart();"\
			label="' + _localize("Restart") + '"\
			accesskey="' + _localize("R", "restartKey") + '"\
			class="menuitem-iconic"\
			image="' + images.restart + '" />\
		<menuitem cb_id="cleanAndRestart"\
			oncommand="this.parentNode.parentNode.commands.cleanAndRestart();"\
			label="' + _localize("Clean and restart") + '"\
			accesskey="' + _localize("C", "cleanAndRestartKey") + '"\
			class="menuitem-iconic"\
			image="' + images.cleanAndRestart + '" />\
		<menuitem cb_id="switchLocale"\
			oncommand="this.parentNode.parentNode.commands.switchLocale();"\
			label="' + _localize("Switch locale to “%S”").replace("%S", cmds.switchLocale(true)) + '"\
			accesskey="' + _localize("S", "switchLocaleKey") + '"\
			class="menuitem-iconic"\
			image="' + images.switchLocale + '" />\
		<menuitem cb_id="saveSessionAndExit"\
			oncommand="this.parentNode.parentNode.commands.saveSessionAndExit();"\
			label="' + _localize("Save session and exit") + '"\
			accesskey="' + _localize("e", "saveSessionAndExitKey") + '"\
			class="menuitem-iconic"\
			image="' + images.saveSessionAndExit + '"\
			hidden="' + !cmds.canSaveSessionAndExit + '" />\
		<menuseparator />\
		<menuitem cb_id="errorConsole"\
			oncommand="this.parentNode.parentNode.commands.openErrorConsole();"\
			key="key_errorConsole"\
			label="' + _localize("Error console") + '"\
			accesskey="' + _localize("E", "errorConsoleKey") + '"\
			class="menuitem-iconic"\
			image="' + images.errorConsole + '" />\
		<menuitem cb_id="attrsInspector"\
			oncommand="this.parentNode.parentNode.commands.attrsInspector();"\
			label="' + _localize("Attributes Inspector") + '"\
			accesskey="' + _localize("A", "attrsInspectorKey") + '"\
			class="menuitem-iconic"\
			image="' + images.attrsInspector + '"\
			hidden="' + !("inspectDOMNode" in window) + '" />\
		<menuseparator />\
		<menu\
			label="' + _localize("Options") + '"\
			accesskey="' + _localize("O", "optionsKey") + '">\
			<menupopup\
				onpopupshowing="this.parentNode.parentNode.parentNode.commands.initPrefsMenu(this);"\
				oncommand="this.parentNode.parentNode.parentNode.commands.doPrefsMenuCommand(event.target);"\
				onclick="if(event.button == 1) closeMenus(this);">\
				<menuitem cb_pref="javascript.options.showInConsole"\
					tooltiptext="javascript.options.showInConsole"\
					type="checkbox"\
					label="' + _localize("Show errors in chrome files") + '"\
					closemenu="none" />\
				<menuitem cb_pref="javascript.options.strict"\
					tooltiptext="javascript.options.strict"\
					type="checkbox"\
					label="' + _localize("Show strict warnings") + '"\
					closemenu="none" />\
				<menuitem cb_pref="javascript.options.strict.debug"\
					tooltiptext="javascript.options.strict.debug"\
					type="checkbox"\
					label="' + _localize("Show strict warnings in debug builds") + '"\
					hidden="' + !this.commands.isDebugBuild + '"\
					closemenu="none" />\
				<menuitem cb_pref="dom.report_all_js_exceptions"\
					tooltiptext="dom.report_all_js_exceptions"\
					type="checkbox"\
					label="' + _localize("Show all exceptions") + '"\
					hidden="' + (
						Components.classes["@mozilla.org/xpcom/version-comparator;1"]
							.getService(Components.interfaces.nsIVersionComparator)
							.compare(
								Components.classes["@mozilla.org/xre/app-info;1"]
									.getService(Components.interfaces.nsIXULAppInfo)
									.platformVersion,
								"1.9a1pre"
							) < 0
					) + '"\
					closemenu="none" />\
				<menuitem cb_pref="extensions.logging.enabled"\
					tooltiptext="extensions.logging.enabled"\
					type="checkbox"\
					label="' + _localize("Show information about extensions update") + '"\
					closemenu="none" />\
				<menuseparator />\
				<menuitem cb_pref="browser.dom.window.dump.enabled"\
					tooltiptext="browser.dom.window.dump.enabled"\
					type="checkbox"\
					label="' + _localize("Enable window.dump()") + '"\
					closemenu="none" />\
				<menuitem cb_pref="nglayout.debug.disable_xul_cache"\
					tooltiptext="nglayout.debug.disable_xul_cache"\
					type="checkbox"\
					label="' + _localize("Disable XUL cache") + '"\
					closemenu="none" />\
				<menuseparator hidden="' + !this.commands.canDisableE4X + '" />\
				<menuitem cb_pref="javascript.options.xml.chrome"\
					tooltiptext="javascript.options.xml.chrome"\
					type="checkbox"\
					label="' + _localize("Enable E4X for chrome") + '"\
					hidden="' + !this.commands.canDisableE4X + '"\
					closemenu="none" />\
				<menuitem cb_pref="javascript.options.xml.content"\
					tooltiptext="javascript.options.xml.content"\
					type="checkbox"\
					label="' + _localize("Enable E4X for content") + '"\
					hidden="' + !this.commands.canDisableE4X + '"\
					closemenu="none" />\
			</menupopup>\
		</menu>\
	</menupopup>'
));
function parseXULFromString(xul) {
	xul = xul.replace(/>\s+</g, "><");
	return new DOMParser().parseFromString(xul, "application/xml").documentElement;
}

this.attrsInspector = function() {
//=== Attributes Inspector begin
// http://forum.mozilla-russia.org/viewtopic.php?pid=470532#p470532
// http://infocatcher.ucoz.net/js/cb/attrsInspector.js

// (c) Infocatcher 2010-2012
// version 0.6.0pre7 - 2012-07-07

//===================
// Attributes Inspector button for Custom Buttons
// (for "code" section)
// Also the code can be used from main window context (as Mouse Gestures code, for example)

// Usage:
//   Use middle-click or Ctrl + left-click (or press Ctrl+I) to inspect node in DOM Inspector
//   (hold additional Shift key to enable pupup locker)
//   Hold Shift key to show and don't hide tooltips and popups
// Hotkeys:
//   Escape             - cancel or disable popup locker
//   Ctrl+Up, Ctrl+Down - go to parent/child node
//   Ctrl+Shift+C       - copy tooltip contents

// Icon: http://www.iconsearch.ru/detailed/278/2/
//===================

var _highlight = true; // Hightlight current node
var _highlightUsingFlasher = false; // Don't modify DOM, but has some side effects (and slower)
// Note: inIFlasher works in Firefox 4 and higher only with disabled hardware acceleration!
// See https://bugzilla.mozilla.org/show_bug.cgi?id=368608 and https://bugzilla.mozilla.org/show_bug.cgi?id=594299
var _borderColor = "red";
var _borderWidth = 1;
var _borderStyle = "solid"; // Doesn't work with _highlightUsingFlasher = true
var _addedColor = "-moz-hyperlinktext";
var _removedColor = "grayText";
var _changedColor = "-moz-visitedhyperlinktext";
var _forbidTooltips = true;
// Lock all popups in window while DOM Inspector is opened (or until Escape was not pressed)
var _popupLocker = 1; // 0 - disable, 1 - only if Shift pressed, 2 - always enable
var _showNamespaceURI = 2; // 0 - don't show, 1 - show as is, 2 - show pretty name instead of URI
var _showFullTree = 2; // 0 - current frame, 1 - top frame, 2 - topmost frame
var _debug = false; // Show debug messages in error console

function _log() {
	if(!_debug)
		return _log = function() {};
	var cs = Components.classes["@mozilla.org/consoleservice;1"]
		.getService(Components.interfaces.nsIConsoleService);
	_log = function() {
		cs.logStringMessage("[Attributes Inspector]: " + Array.map(arguments, String).join("\n"));
	};
	return _log.apply(this, arguments);
}

const _ns = "__attributesInspector";
var context = _ns in window && window[_ns] || (
	window[_ns] = {
		button: "getAttribute" in this && this,
		checked: false,
		toggle: function() {
			toggle.call(context);
		},
		stop: function() {
			this.checked && this.toggle();
		}
	}
);
var ael = function(type, func, useCapture, target) {
	return (target || window).addEventListener(type, func, useCapture);
};
var rel = function(type, func, useCapture, target) {
	return (target || window).removeEventListener(type, func, useCapture);
};

context.toggle();

function toggle() {
	var checked = this.checked = !this.checked;
	var btn = this.button;
	if(btn) {
		btn.checked = checked;
		if(!checked) {
			var doc = btn.ownerDocument;
			(function uncheck() { // D'oh...
				for(var node = btn.parentNode; ; node = node.parentNode) {
					if(!node) { // Node was removed from document
						_log("Button was removed from document");
						return;
					}
					if(node.nodeType == node.DOCUMENT_NODE)
						break;
				}
				//if(!doc.getElementById("wrapper-" + btn.id)) {
				if(btn.parentNode.localName != "toolbarpaletteitem") {
					if(btn.checked != checked) {
						btn.checked = checked;
						_log("Set checked state: " + checked);
						return;
					}
					_log("Button checked state is correct");
					return;
				}
				if(!uncheck.hasOwnProperty("_logged")) {
					uncheck._logged = true;
					_log("Button is wrapped, wait...");
				}
				doc.defaultView.setTimeout(uncheck, 20);
			})();
		}
	}
	if(checked)
		init.call(this);
	else
		destroy.call(this);
}
function init() {
	const ttId = this.ttId = "__attrsInspectorTooltip";
	var tt = this.tt = document.createElementNS("http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul", "tooltip");
	tt.id = ttId;
	tt.setAttribute("orient", "vertical");
	top.document.documentElement.appendChild(tt);

	// Resolve -moz-* and system colors (for copy tooltip contents feature)
	tt.style.color = _addedColor;
	_addedColor = top.getComputedStyle(tt, null).color;
	tt.style.color = _removedColor;
	_removedColor = top.getComputedStyle(tt, null).color;
	tt.style.color = _changedColor;
	_changedColor = top.getComputedStyle(tt, null).color;
	tt.style.color = "";

	if(!_highlightUsingFlasher) {
		this.hlAttrNS = "urn:attrsInspectorNS";
		this.hlAttr = "__attrs_inspector_highlighted__"; // Don't use caps here - works only in Firefox 4
		var sss = this.sss = Components.classes["@mozilla.org/content/style-sheet-service;1"]
			.getService(Components.interfaces.nsIStyleSheetService);
		var cssStr = '\
			/* Attributes Inspector highlight styles */\
			@namespace ains url("%ns%");\
			%priorityHack%[ains|%attr%="true"] {\
				outline: %borderWidth%px %borderStyle% %borderColor% !important;\
				outline-offset: -%borderWidth%px !important;\
			}'
			.replace(/%ns%/g, this.hlAttrNS)
			.replace(/%attr%/g, this.hlAttr)
			.replace(/%borderColor%/g, _borderColor)
			.replace(/%borderWidth%/g, _borderWidth)
			.replace(/%borderStyle%/g, _borderStyle)
			.replace(/%priorityHack%/g, (function() {
				var rnd = Math.random().toFixed(16).substr(2);
				var hack = "*|*";
				for(var i = 0; i < 16; ++i)
					hack += ":not(#__priorityHack__" + rnd + "__" + i + ")";
				return hack;
			})());
		var cssURI = this.cssURI = Components.classes["@mozilla.org/network/io-service;1"]
			.getService(Components.interfaces.nsIIOService)
			.newURI("data:text/css," + encodeURIComponent(cssStr), null, null);
		if(!sss.sheetRegistered(cssURI, sss.AGENT_SHEET))
			sss.loadAndRegisterSheet(cssURI, sss.AGENT_SHEET);
		if(!sss.sheetRegistered(cssURI, sss.USER_SHEET))
			sss.loadAndRegisterSheet(cssURI, sss.USER_SHEET);
	}

	this.wm = Components.classes["@mozilla.org/appshell/window-mediator;1"]
		.getService(Components.interfaces.nsIWindowMediator);
	this.setAllListeners = function(action) {
		var ws = this.wm.getEnumerator(null);
		while(ws.hasMoreElements())
			this.setListeners(action, ws.getNext());
	};
	this.setListeners = function(action, w) {
		var h = new this.evtHandler(w);

		action("mouseover", h, true, w);
		action("mousemove", h, true, w);
		action("mouseout",  h, true, w);
		action("keydown",   h, true, w);
		action("keypress",  h, true, w);
		action("keyup",     h, true, w);
		//if(action == rel || this.inspector) {
		action("mousedown", h, true, w);
		action("mouseup",   h, true, w);
		action("click",     h, true, w);
		//}
		action("popupshown", h, true, w);
		if(_forbidTooltips) {
			action("popupshowing", h, true, w);
			action("popuphiding",  h, true, w);
		}

		if(action == rel) {
			var ehg = this.evtHandlerGlobal;
			var hi = ehg._windows.indexOf(w);
			delete ehg._windows[hi];
			delete ehg._handlers[hi];
		}
	};
	this.ww = Components.classes["@mozilla.org/embedcomp/window-watcher;1"]
		.getService(Components.interfaces.nsIWindowWatcher);

	this.evtHandlerGlobal = {
		_handlers: [],
		_windows: [],
		context: this,
		window: window,
		_hl: null,
		_node: null,
		_attrsWatcher: null,
		_nodes: [],
		handleEvent: function(e) {
			this[e.type + "Handler"](e);
		},
		e: function(nn) {
			return document.createElementNS("http://www.w3.org/1999/xhtml", nn);
		},
		s: function(v, tag) {
			var s = this.e(tag || "span");
			s.appendChild(document.createTextNode(v));
			return s;
		},
		getHeader: function(v, state) {
			var e = this.s(v, "strong");
			//e.style.fontWeight = "bold";
			e.className = "attrsInspector-header";
			state && this.setState(e, state);
			return e;
		},
		get separator() {
			var sep = this._separator = this.s(" = ");
			sep.className = "attrsInspector-separator";
			this.__defineGetter__("separator", function() {
				return this._separator.cloneNode(true);
			});
			return this.separator;
		},
		get space() {
			var sp = this._space = this.s(" ");
			sp.className = "attrsInspector-space";
			this.__defineGetter__("space", function() {
				return this._space.cloneNode(true);
			});
			return this.space;
		},
		getValue: function(v, state) {
			var e = this.s(v);
			//e.style.whiteSpace = "pre";
			e.className = "attrsInspector-value";
			state && this.setState(e, state);
			return e;
		},
		setState: function(e, state) {
			if(state.isRemoved) {
				e.style.color = _removedColor;
				e.style.textDecoration = "line-through";
				e.className += " attrsInspector-removed";
			}
			if(state.isAdded) {
				e.style.color = _addedColor;
				e.className += " attrsInspector-added";
			}
			if(state.isChanged) { // Can be added and changed!
				e.style.color = _changedColor;
				e.className += " attrsInspector-changed";
			}
		},
		getItem: function(header, value, spaceSep, state) {
			var overflowBox = this.e("div");
			overflowBox.style.overflow = "hidden";
			overflowBox.className = "attrsInspector-itemContainer";

			var item = this.e("div");
			item.style.lineHeight = "1.25";
			item.style.maxHeight = "12.5em";
			item.className = "attrsInspector-item";
			item.appendChild(this.getHeader(header, state));
			if(value) {
				item.appendChild(spaceSep ? this.space : this.separator);
				item.appendChild(this.getValue(value, state));
			}

			overflowBox.appendChild(item);
			return overflowBox;
		},
		_hasData: false,
		setData: function(node) {
			var tt = this.context.tt;
			this._hasData = true;

			while(tt.hasChildNodes())
				tt.removeChild(tt.lastChild);

			if(node.nodeType == node.DOCUMENT_NODE) {
				tt.appendChild(this.getItem(node.nodeName));
				tt.appendChild(this.getItem("documentURI", node.documentURI));
				node.title && tt.appendChild(this.getItem("title", node.title));
				return;
			}

			var rect = "getBoundingClientRect" in node
				? node.getBoundingClientRect()
				: node instanceof XULElement
					? node.boxObject
					: node.ownerDocument && node.ownerDocument.getBoxObjectFor(node);
			if(!("width" in rect)) {
				rect.width = rect.right - rect.left;
				rect.height = rect.bottom - rect.top;
			}
			var w = rect.width;
			var h = rect.height;
			if(!w && !h)
				tt.appendChild(this.getItem(node.nodeName));
			else {
				if(Math.floor(w) != w)
					w = w.toFixed(3);
				if(Math.floor(h) != h)
					h = h.toFixed(3);
				tt.appendChild(this.getItem(node.nodeName, "[" + w + "\xd7" + h + "]", true));
			}

			var nodeNS = node.namespaceURI;
			if(_showNamespaceURI/* && node.nodeName.indexOf(":") == -1*/)
				tt.appendChild(this.getItem("namespaceURI", this.getNS(nodeNS)));

			if(!node.attributes)
				return;

			var topAttrs = ["id", "class"].reverse();
			if(this._node) {
				var addedAttrs   = this.addedAttrs;
				var removedAttrs = this.removedAttrs;
				var changedAttrs = this.changedAttrs;
			}
			else {
				addedAttrs = removedAttrs = changedAttrs = { __proto__: null };
			}

			var attrs = Array.slice(node.attributes);
			for(var name in removedAttrs)
				attrs.push(removedAttrs[name]);

			attrs.sort(function(a, b) {
				a = a.name;
				b = b.name;
				var ai = topAttrs.indexOf(a);
				var bi = topAttrs.indexOf(b);
				if(ai != -1 || bi != -1)
					return bi - ai;
				return a > b;
			}).forEach(function(attr) {
				var name = attr.name;
				var val = attr.value;
				var ns = attr.namespaceURI;
				if(!_highlightUsingFlasher) {
					if(name == this.context.hlAttr && ns == this.context.hlAttrNS)
						return;
					if(this.noStyles && name == "style") {
						val = val
							.replace(
								"outline-color: " + _borderColor + "; "
									+ "outline-style: " + _borderStyle + "; "
									+ "outline-width: " + _borderWidth + "px; "
									+ "outline-offset: -" + _borderWidth + "px;",
								""
							)
							.replace(/^ | $/g, "");
						if(!val)
							return;
					}
				}
				if(_showNamespaceURI && ns && ns != nodeNS && name.indexOf(":") == -1)
					name += " [" + this.getNS(ns) + "]";
				tt.appendChild(this.getItem(name, val, false, {
					isAdded:   name in addedAttrs && addedAttrs[name] == ns,
					isChanged: name in changedAttrs && changedAttrs[name] == ns,
					isRemoved: name in removedAttrs && removedAttrs[name].namespaceURI == ns
				}));
			}, this);

			if(this.fxVersion >= 16) //~ todo: check after Firefox 16 will be released
				this.forceRedraw(tt);
		},
		getNS: function(ns) {
			if(_showNamespaceURI == 1)
				return ns;
			switch(ns) {
				case "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul": return "XUL";
				case "http://www.w3.org/1999/xhtml":                                  return "XHTML";
				case "http://www.mozilla.org/xbl":                                    return "XBL";
				case "http://www.w3.org/2000/svg":                                    return "SVG";
				case "http://www.w3.org/1998/Math/MathML":                            return "MathML";
				case "http://www.w3.org/1999/xlink":                                  return "XLink";
				case "http://www.w3.org/2000/xmlns/":                                 return "XMLNS";
				case "http://www.w3.org/XML/1998/namespace":                          return "XML";
				case "http://www.w3.org/1999/XSL/Transform":                          return "XSLT";
				case "http://www.w3.org/1999/02/22-rdf-syntax-ns":                    return "RDF";
				case "http://www.w3.org/2001/xml-events":                             return "XML Events";
			}
			return ns;
		},
		stop: function() {
			this.context.stop();
		},
		canInspect: function(e) {
			var noMdf = /*!e.shiftKey && */!e.altKey && !e.metaKey;
			if(!_forbidTooltips && e.shiftKey)
				return false;
			return e.button == 1 && noMdf && !e.ctrlKey // Middle-click
			    || e.button == 0 && noMdf &&  e.ctrlKey; // Ctrl + left-click
		},
		get fxVersion() {
			var appInfo = Components.classes["@mozilla.org/xre/app-info;1"]
				.getService(Components.interfaces.nsIXULAppInfo);
			var pv = appInfo.platformVersion;
			var vc = Components.classes["@mozilla.org/xpcom/version-comparator;1"]
				.getService(Components.interfaces.nsIVersionComparator);
			var v;
			if(vc.compare(pv, "5.0a1pre") >= 0)
				v = parseFloat(pv);
			else if(vc.compare(pv, "2.0a1pre") >= 0)
				v = 4.0;
			else if(vc.compare(pv, "1.9.2a1pre") >= 0)
				v = 3.6;
			else if(vc.compare(pv, "1.9.1a1pre") >= 0)
				v = 3.5;
			else if(vc.compare(pv, "1.9a1pre") >= 0)
				v = 3.0;
			else if(vc.compare(pv, "1.8.1a1pre") >= 0)
				v = 2.0;
			else //if(vc.compare(pv, "1.8a1pre") >= 0)
				v = 1.5;
			delete this.fxVersion;
			return this.fxVersion = v;
		},
		get noStyles() {
			delete this.noStyles;
			//return this.noStyles = this.fxVersion < 3;
			return this.noStyles = Components.ID("{41d979dc-ea03-4235-86ff-1e3c090c5630}")
				.equals(Components.interfaces.nsIStyleSheetService);
		},
		stopEvent: function(e) {
			e.preventDefault();
			e.stopPropagation();
			"stopImmediatePropagation" in e && e.stopImmediatePropagation();
			//_log("stopEvent: " + e.type);
		},
		get flasher() {
			var flasher = Components.classes["@mozilla.org/inspector/flasher;1"]
				.getService(Components.interfaces.inIFlasher);
			flasher.color = _borderColor;
			flasher.thickness = _borderWidth;
			flasher.invert = false;

			delete this.flasher;
			return this.flasher = flasher;
		},
		hl: function(node) {
			if(!_highlight)
				return;
			this.unhl(); // Only one highlighted node
			if(!("setAttributeNS" in node))
				return;
			this._hl = node;

			if(_highlightUsingFlasher) {
				this.flasher.drawElementOutline(node);
				this._hlInterval = setInterval(function(_this) {
					_this.flasher.drawElementOutline(node);
				}, 10, this);
				return;
			}

			if(this.noStyles) {
				this._oldStyle = node.hasAttribute("style") && node.getAttribute("style");
				node.style.outline = _borderWidth + "px " + _borderStyle + " " + _borderColor;
				node.style.outlineOffset = "-" + _borderWidth + "px";
				//return;
			}
			node.setAttributeNS(this.context.hlAttrNS, this.context.hlAttr, "true");

			if(this.fxVersion >= 16) //~ todo: check after Firefox 16 will be released
				this.forceRedraw(node);
		},
		unhl: function() {
			var node = this._hl;
			if(!node)
				return;
			this._hl = null;
			if(!("removeAttributeNS" in node))
				return;

			if(_highlightUsingFlasher) {
				this.flasher.repaintElement(node);
				this.flasher.repaintElement(node.ownerDocument.documentElement);
				clearInterval(this._hlInterval);
				return;
			}

			if(this.noStyles) {
				if(this._oldStyle || this._oldStyle === "")
					node.setAttribute("style", this._oldStyle);
				else
					node.removeAttribute("style");
				//return;
			}
			node.removeAttributeNS(this.context.hlAttrNS, this.context.hlAttr);
		},
		forceRedraw: function(node) {
			//~ todo: not needed since 2012-07-04 ?
			/*
			var _this = this;
			setTimeout(function() {
				_this.flasher.repaintElement(node);
			}, 50);
			*/
		},

		get mutationObserver() {
			delete this.mutationObserver;
			return this.mutationObserver = "MutationObserver" in this.window // Firefox 14+
				&& new this.window.MutationObserver(this);
		},
		watchAttrs: function(node) {
			this.unwatchAttrs(); // Only one watched node
			this._node = node;

			this.addedAttrs   = { __proto__: null };
			this.removedAttrs = { __proto__: null };
			this.changedAttrs = { __proto__: null };

			var mo = this.mutationObserver;
			if(mo) {
				// http://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html#mutation-observers
				mo.observe(node, {
					attributes: true,
					attributeOldValue: true
				});
				return;
			}
			// Legacy version
			if(this.fxVersion != 2)
				var aw = this;
			else { // Hack for Firefox 2.0
				var aw = this._attrsWatcher = {
					parent: this,
					handleEvent: function(e) {
						this.parent.DOMAttrModifiedHandler(e);
					}
				};
			}
			ael("DOMAttrModified", aw, true, node);
		},
		unwatchAttrs: function() {
			if(!this._node)
				return;
			var mo = this.mutationObserver;
			if(mo)
				mo.disconnect();
			else
				rel("DOMAttrModified", this._attrsWatcher || this, true, this._node);
			this._node = this._attrsWatcher = null;
			this.addedAttrs = this.removedAttrs = this.changedAttrs = null;
		},
		handleMutations: function(mutations) {
			mutations.forEach(function(mutation) {
				if(mutation.type != "attributes" || mutation.target != this._node)
					return;
				this.handleMutation(
					mutation.attributeName,
					mutation.attributeNamespace,
					mutation.oldValue === null, // isAdded
					!mutation.target.hasAttributeNS(mutation.attributeNamespace, mutation.attributeName), // isRemoved
					mutation.oldValue
				);
			}, this);
			this.setData(this._node);
		},
		DOMAttrModifiedHandler: function(e) {
			if(e.originalTarget != this._node) // Ignore mutations in child nodes
				return;
			this.handleMutation(
				e.attrName,
				e.relatedNode && e.relatedNode.namespaceURI || null,
				e.attrChange == e.ADDITION,
				e.attrChange == e.REMOVAL,
				e.prevValue
			);
			this.setData(this._node);
		},
		handleMutation: function(attrName, attrNS, isAdded, isRemoved, oldValue) {
			if(isAdded) {
				this.addedAttrs[attrName] = attrNS;
				delete this.removedAttrs[attrName];
				delete this.changedAttrs[attrName];
			}
			else if(isRemoved) {
				this.removedAttrs[attrName] = {
					name: attrName,
					value: oldValue,
					namespaceURI: attrNS
				};
				delete this.addedAttrs[attrName];
				delete this.changedAttrs[attrName];
			}
			else {
				this.changedAttrs[attrName] = attrNS;
				delete this.removedAttrs[attrName]; // ?
			}
		},

		setClipboardData: function(dataObj, clipId) {
			var ta = Components.classes["@mozilla.org/widget/transferable;1"]
				.createInstance(Components.interfaces.nsITransferable);
			for(var flavor in dataObj) if(dataObj.hasOwnProperty(flavor)) {
				var value = dataObj[flavor];
				var str = Components.classes["@mozilla.org/supports-string;1"]
					.createInstance(Components.interfaces.nsISupportsString);
				str.data = value;
				ta.addDataFlavor(flavor);
				ta.setTransferData(flavor, str, value.length * 2);
			}
			var cb = Components.classes["@mozilla.org/widget/clipboard;1"]
				.getService(Components.interfaces.nsIClipboard);
			cb.setData(ta, null, clipId === undefined ? cb.kGlobalClipboard : clipId);
		},
		_noMouseover: false,
		_noMouseoverTimer: null,
		mouseoverHandler: function(e) {
			if(this._noMouseover)
				return;
			var node = e.originalTarget;
			this._nodes = [node];
			this.handleNodeFromEvent(node, e);
		},
		handleNodeFromEvent: function(node, e) {
			this.hl(node);
			this.setData(node);
			this.watchAttrs(node);
			this.mousemoveHandler(e);
		},
		handleNode: function(node) {
			// Tooltip with big height -> wrongly under cursor -> reposition -> mouseover
			// And setTimeout() in parent window fail for modal child window
			if(this._noMouseover)
				this._noMouseoverTimer.cancel();
			this._noMouseover = true;

			this.handleNodeFromEvent(node);

			var timer = this._noMouseoverTimer || (
				this._noMouseoverTimer = Components.classes["@mozilla.org/timer;1"]
					.createInstance(Components.interfaces.nsITimer)
			);
			var observer = {
				context: this,
				observe: function() {
					this.context._noMouseover = false;
				}
			};
			timer.init(observer, 200, timer.TYPE_ONE_SHOT);
		},
		mousemoveHandler: function(e) {
			var tt = this.context.tt;

			if(!this._hasData) {
				this.mouseoverHandler(e);
				return;
			}

			if(e) {
				this._lastScreenX = e.screenX;
				this._lastScreenY = e.screenY;

				this._shiftKey = e.shiftKey;
			}
			else {
				e = {
					screenX: this._lastScreenX || 0,
					screenY: this._lastScreenY || 0
				};
			}

			var fxVersion = this.fxVersion;

			if(fxVersion <= 2) {
				// Ugly workaround...
				var text = Array.map(tt.childNodes, function(node) {
					return node.textContent;
				}).join("\n");
				while(tt.hasChildNodes())
					tt.removeChild(tt.lastChild);
				var d = top.document.createElementNS(
					"http://www.w3.org/1999/xhtml",
					"div"
				);
				d.style.whiteSpace = "-moz-pre-wrap";
				d.textContent = text;
				tt.height = null;
				tt.insertBefore(d, tt.firstChild);
				tt.height = tt.boxObject.height;
			}

			if("openPopupAtScreen" in tt) // Firefox 3.0+
				tt.openPopupAtScreen(e.screenX, e.screenY, false /*isContextMenu*/);
			else
				tt.showPopup(document.documentElement, e.screenX, e.screenY, "tooltip", null, null);

			if(fxVersion <= 2)
				return;
			var x = e.screenX;
			var y = e.screenY;
			if(fxVersion <= 3.5) {
				x = Math.min(screen.width  - tt.boxObject.width,  x);
				y = Math.min(screen.height - tt.boxObject.height, y);
				var debo = document.documentElement.boxObject;
				x += debo.screenX;
				y += debo.screenY;
			}
			if(fxVersion != 3.6)
				y += 22;
			tt.moveTo(x, y);
		},
		mouseoutHandler: function(e) {
			if(!e.relatedTarget)
				this.context.tt.hidePopup();
			this.unwatchAttrs();
			this.unhl();
		},
		keydownHandler: function(e) {
			this._shiftKey = e.shiftKey;
			this.keypressHandler.apply(this, arguments);
		},
		keyupHandler: function(e) {
			this._shiftKey = e.shiftKey;
			this.keypressHandler.apply(this, arguments);
		},
		keypressHandler: function(e, top) {
			// keydown => stopEvent()
			// keypress => stopEvent() + hetkey action
			// keyup => stopEvent()
			var onlyStop = e.type == "keydown" || e.type == "keyup";
			if(e.keyCode == e.DOM_VK_ESCAPE) {
				this.stopEvent(e);
				if(onlyStop)
					return;
				this.stopSingleEvent(top, "keyup");
				this.stop();
				return;
			}
			var ctrlOrCtrlShift = (e.ctrlKey || e.metaKey) && !e.altKey;
			var ctrl      = ctrlOrCtrlShift && !e.shiftKey;
			var ctrlShift = ctrlOrCtrlShift &&  e.shiftKey;
			if(!ctrlOrCtrlShift)
				return;

			if(!_forbidTooltips)
				ctrlOrCtrlShift = ctrl;

			if(ctrlOrCtrlShift && e.keyCode == e.DOM_VK_UP) { // Ctrl+Up
				this.stopEvent(e);
				if(!onlyStop)
					this.navigateUp(top);
			}
			else if(ctrlOrCtrlShift && e.keyCode == e.DOM_VK_DOWN) { // Ctrl+Down
				this.stopEvent(e);
				if(!onlyStop)
					this.navigateDown();
			}
			else if(ctrlShift && e.keyCode == e.DOM_VK_C) // keydown || keyup
				this.stopEvent(e);
			else if(ctrlShift && e.keyCode == 0 && String.fromCharCode(e.charCode) == "C") { // Ctrl+Shift+C
				this.stopEvent(e);
				if(!onlyStop)
					this.copyTootipContent();
			}
			else if(ctrlShift && e.keyCode == e.DOM_VK_I) // keydown || keyup
				this.stopEvent(e);
			else if(
				ctrlOrCtrlShift
				&& e.keyCode == 0
				&& String.fromCharCode(e.charCode).toUpperCase() == "I"
			) { // Ctrl+I, Ctrl+Shift+I
				this._checkPreventDefault(e);
				this.stopEvent(e);
				if(onlyStop)
					return;
				this.stopSingleEvent(top, "keyup");
				var nodes = this._nodes;
				nodes.length && this.inspect(nodes[0], top, e.shiftKey);
			}
		},
		navigateUp: function(top) {
			var nodes = this._nodes;
			//var node = nodes.length && nodes[0].parentNode;
			var node = nodes.length && Components.classes["@mozilla.org/inspector/dom-utils;1"]
				.getService(Components.interfaces.inIDOMUtils)
				.getParentForNode(nodes[0], true);
			if(!node && nodes.length && nodes[0].nodeType == Node.DOCUMENT_NODE && nodes[0] != top.document)
				node = this.getParentFrame(nodes[0], top.document); // Only for Firefox 1.5
			if(node) {
				nodes.unshift(node);
				this.handleNode(node);
			}
		},
		navigateDown: function() {
			var nodes = this._nodes;
			if(nodes.length > 1) {
				nodes.shift();
				this.handleNode(nodes[0]);
			}
			else if(nodes.length == 1) {
				var node = nodes[0];
				var childs = node.childNodes;
				if(!childs.length && "getAnonymousNodes" in node.ownerDocument)
					childs = node.ownerDocument.getAnonymousNodes(node);
				if(childs) for(var i = 0, l = childs.length; i < l; ++i) {
					var node = childs[i];
					if("attributes" in node && node.attributes) {
						this._nodes = [node];
						this.handleNode(node);
						break;
					}
				}
			}
		},
		copyTootipContent: function() {
			var tt = this.context.tt;
			var text = Array.map(tt.childNodes, function(node) {
				return node.textContent;
			}).join("\n");
			var _tt = tt.cloneNode(true);
			Array.forEach(_tt.getElementsByAttribute("class", "attrsInspector-value"), function(elt) {
				elt.style.whiteSpace = "pre";
			});
			if(_tt.firstChild.style.whiteSpace == "-moz-pre-wrap") // Part of hack for Firefox 1.5 and 2.0
				_tt.firstChild.style.whiteSpace = "pre";
			var html = Array.map(_tt.childNodes, function(node) {
				return new XMLSerializer().serializeToString(node);
			}).join("\n");
			this.setClipboardData({
				"text/unicode": text,
				"text/html":    html
			});

			if(!/(?:^|\s)attrsInspector-copied(?:\s|$)/.test(tt.className))
				tt.className += " attrsInspector-copied";
			//tt.style.opacity = "0.75";
			tt.style.color = "grayText";
			setTimeout(function() {
				tt.className = tt.className
					.replace(/(?:^|\s)attrsInspector-copied(?:\s|$)/, " ")
					.replace(/\s+$/, "");
				//tt.style.opacity = "";
				tt.style.color = "";
			}, 150);
		},
		stopSingleEvent: function(target, type) {
			target.addEventListener(type, {
				target: target,
				context: this,
				handleEvent: function(e) {
					this.target.removeEventListener(e.type, this, true);
					this.context.stopEvent(e);
				}
			}, true);
		},
		getParentFrame: function(document, doc) {
			// We don't check anonymous nodes now
			var browser;
			const XULNS = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
			Array.concat(
				Array.slice(doc.getElementsByTagNameNS(XULNS, "tabbrowser")),
				Array.slice(doc.getElementsByTagNameNS(XULNS, "browser")),
				Array.slice(doc.getElementsByTagName("iframe")),
				Array.slice(doc.getElementsByTagName("frame"))
			).some(function(br) {
				if(!("contentDocument" in br))
					return false;
				var doc = br.contentDocument;
				_log(
					"Search parent frame: <" + br.nodeName + "> "
					+ (doc.title ? doc.title + " " : "") + doc.documentURI
				);
				if(
					doc == document
					|| (br = this.getParentFrame(document, doc))
				) {
					browser = br.localName.toLowerCase() == "tabbrowser" && br.selectedBrowser || br;
					return true;
				}
				return false;
			}, this);
			return browser;
		},
		mousedownHandler: function(e) {
			if(this.canInspect(e)) {
				this._checkPreventDefault(e);
				this.stopEvent(e);
			}
		},
		mouseupHandler: function(e) {
			this.mousedownHandler.apply(this, arguments);
		},
		clickHandler: function(e, top) {
			if(!this.canInspect(e))
				return;
			this._checkPreventDefault(e);
			this.stopEvent(e);
			var nodes = this._nodes;
			var node = nodes.length ? nodes[0] : e.originalTarget;
			this.inspect(node, top, e.shiftKey);
		},
		inspect: function(node, top, forcePopupLocker) {
			var inspect = this.context.inspector;
			if(inspect && _popupLocker && (_popupLocker == 2 || forcePopupLocker))
				this.lockPopup(node, top);
			this.stop();
			_log(inspect ? "Open DOM Inspector for <" + node.nodeName + ">" : "DOM Inspector not found!");
			inspect && inspect(node, top, forcePopupLocker);
			this.closeMenus(node);
			this.hideUnclosedPopups();
		},
		getPopup: function(node) {
			for(; node && "tagName" in node; node = node.parentNode)
				if(
					node.namespaceURI == "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul"
					&& "hidePopup" in node
				)
					return node;
			return null;
		},
		lockPopup: function(node, top) {
			var popup = this.getPopup(node);
			if(!popup)
				return;

			var popupLocker = {
				domiWindow: null,
				window: top,
				popup: popup,
				ww: Components.classes["@mozilla.org/embedcomp/window-watcher;1"]
					.getService(Components.interfaces.nsIWindowWatcher),
				closeMenus: this.closeMenus,
				stopEvent: this.stopEvent,
				stopSingleEvent: this.stopSingleEvent,
				_getPopupInfo: this._getPopupInfo,
				_popups: [],
				init: function() {
					var w = this.window;
					//w.addEventListener("unload",       this, false);
					w.addEventListener("keydown",      this, true);
					w.addEventListener("keypress",     this, true);
					w.addEventListener("keyup",        this, true);
					w.addEventListener("popupshowing", this, true);
					w.addEventListener("popuphiding",  this, true);
					this.ww.registerNotification(this);
					_log("Popup locker: start");
				},
				destroy: function() {
					var w = this.window;
					//w.removeEventListener("unload",       this, false);
					w.removeEventListener("keydown",      this, true);
					w.removeEventListener("keypress",     this, true);
					w.removeEventListener("keyup",        this, true);
					w.removeEventListener("popupshowing", this, true);
					w.removeEventListener("popuphiding",  this, true);
					this.ww.unregisterNotification(this);
					this._popups.forEach(function(popup) {
						if("hidePopup" in popup)
							popup.hidePopup();
					});
					_log("Popup locker: stop");
				},
				handleEvent: function(e) {
					switch(e.type) {
						case "popupshowing":
							this.stopEvent(e);
							var popup = e.originalTarget;
							_log("Popup locker: prevent popup showing: " + this._getPopupInfo(popup));
						break;
						case "popuphiding":
							//if(e.originalTarget == this.popup)
							this.stopEvent(e);
							var popup = e.originalTarget;
							_log("Popup locker: prevent popup hiding: " + this._getPopupInfo(popup));
							if(this._popups.indexOf(popup) == -1)
								this._popups.push(popup);
						break;
						case "keydown":
						case "keypress":
						case "keyup":
							var onlyStop = e.type == "keydown" || e.type == "keyup";
							if(e.keyCode == e.DOM_VK_ESCAPE) {
								this.stopEvent(e);
								if(onlyStop)
									return;
								this.stopSingleEvent(this.window, "keyup");
								_log("Popup locker: Escape pressed => destroy");
								this.destroy();
								this.closeMenus(this.popup);
							}
						break;
						case "load":
							var win = e.target.defaultView;
							win.removeEventListener("load", this, false);
							if(!this.domiWindow && win.location.href == "chrome://inspector/content/inspector.xul") {
								_log("Popup locker: DOM Inspector opened");
								this.domiWindow = win;
							}
					}
				},
				observe: function(subject, topic, data) {
					if(topic == "domwindowopened") {
						subject.addEventListener("load", this, false);
					}
					else if(topic == "domwindowclosed") {
						subject.removeEventListener("load", this, false);
						if(subject == this.domiWindow) {
							_log("Popup locker: DOM Inspector closed => destroy");
							this.destroy();
						}
						else if(subject == this.window) {
							_log("Popup locker: locked window closed => destroy");
							this.destroy();
						}
					}
				}
			};
			popupLocker.init();
		},
		_checkPreventDefault: function(e) {
			if("defaultPrevented" in e ? e.defaultPrevented : e.getPreventDefault())
				_log('Warning! Default action for "' + e.type + '" event is already cancelled!');
		},
		closeMenus: function(node) {
			// Based on function closeMenus from chrome://browser/content/utilityOverlay.js
			for(; node && "tagName" in node; node = node.parentNode) {
				if(
					node.namespaceURI == "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul"
					&& (node.localName == "menupopup" || node.localName == "popup")
				)
					node.hidePopup();
			}
		},

		_popups: [],
		__shiftKey: false,
		get _shiftKey() {
			return this.__shiftKey;
		},
		set _shiftKey(val) {
			this.__shiftKey = val;
			!val && this.hideUnclosedPopups();
		},
		hideUnclosedPopups: function() {
			this._popups.forEach(function(popup) {
				if("hidePopup" in popup) {
					popup.hidePopup();
					_log("Hide popup: " + this._getPopupInfo(popup));
				}
			}, this);
			this._popups = [];
		},
		popupshowingHandler: function(e) {
			if(this._shiftKey)
				return;
			var tar = e.originalTarget;
			if(tar.localName == "tooltip" && tar.id != this.context.ttId) {
				this.stopEvent(e);
				_log("Forbid tooltip showing: " + this._getPopupInfo(tar));
			}
		},
		popupshownHandler: function(e) {
			var tar = e.originalTarget;
			if(tar.id == this.context.ttId || /*this._shiftKey && */tar.localName == "tooltip")
				return;
			// Make tooltip topmost
			tt.hidePopup(); // Ugly with show/hide tooltips animation
			this.mousemoveHandler();
			_log("popupshown => make tooltip topmost");
		},
		popuphidingHandler: function(e) {
			if(!this._shiftKey)
				return;
			var tar = e.originalTarget;
			if(/*tar.localName == "tooltip" && */tar.id != this.context.ttId) {
				this.stopEvent(e);
				if(this._popups.indexOf(tar) == -1)
					this._popups.push(tar);
				_log("Forbid popup hiding: " + this._getPopupInfo(tar));
			}
		},
		_getPopupInfo: function(tt) {
			var ret = "<" + tt.nodeName + ">";
			if(tt.id)
				ret += ' id="' + tt.id + '"';
			if(tt.className)
				ret += ' class="' + tt.className + '"';
			var val = tt.value || tt.getAttribute("value") || tt.getAttribute("label") || tt.textContent;
			if(val)
				ret += ' "' + val + '"';
			return ret;
		},

		observe: function(subject, topic, data) {
			if(topic == "domwindowopened") {
				this.context.setListeners(ael, subject);
				_log("New window opened");
				if(!_debug)
					return;
				this._loadHandler = {
					parent: this,
					window: subject,
					handleEvent: function(e) {
						if(e.target.defaultView != this.window) //?
							return;
						_log("New window loaded: " + e.target.title + " (" + e.target.location + ")");
						this.destroy();
					},
					destroy: function() {
						this.window.removeEventListener("load", this, false);
						delete this.parent._loadHandler;
					}
				};
				subject.addEventListener("load", this._loadHandler, false);
			}
			else if(topic == "domwindowclosed") {
				if(this.hasOwnProperty("_loadHandler")) // Window can be closed before "load" event happens
					this._loadHandler.destroy();
				this.context.setListeners(rel, subject);
				if(subject == this.window)
					this.stop();
				_log("Window closed: " + (subject.document && subject.document.title) + " (" + subject.location + ")");
			}
		}
	};
	this.evtHandler = function(win) {
		var gh = this.globalHandler;
		var hi = gh._windows.indexOf(win);
		if(hi != -1)
			return gh._handlers[hi];

		this.currentWindow = win;
		gh._handlers.push(this);
		gh._windows.push(win);
		return this;
	};
	this.evtHandler.prototype = {
		globalHandler: this.evtHandlerGlobal,
		handleEvent: function(e) {
			this.globalHandler[e.type + "Handler"](e, this.currentWindow);
		}
	};
	this.__defineGetter__("inspector", function() {
		var ws = this.wm.getEnumerator(null);
		while(ws.hasMoreElements()) {
			var w = ws.getNext();
			if(!("inspectDOMNode" in w))
				continue;
			if(_showFullTree && this.evtHandlerGlobal.fxVersion >= 2) {
				return function(node, top) {
					// Too many hacks...
					//if((node.ownerDocument || node).defaultView == top) {
					//	w.inspectDOMNode(node);
					//	return;
					//}
					var inspWin = window.openDialog(
						"chrome://inspector/content/",
						"_blank",
						"chrome,all,dialog=no",
						_showFullTree == 1
							? (node.ownerDocument || node).defaultView.top.document
							: (top || window.top).document
					);
					var tryDelay = 5;
					function inspect() {
						if(!inspWin.inspector) {
							inspWin.setTimeout(inspect, tryDelay);
							return;
						}
						try {
							try {
								// Avoid warnings in error console after getViewer("dom")
								var hash = inspWin.inspector.mPanelSet.registry.mViewerHash;
							}
							catch(e1) {
								Components.utils.reportError(e1);
							}
							if(!hash || ("dom" in hash)) {
								var viewer = inspWin.inspector.getViewer("dom");
								var prefs = Components.classes["@mozilla.org/preferences-service;1"]
									.getService(Components.interfaces.nsIPrefBranch);
								const blinkPref = "inspector.blink.on";
								var blink = prefs.getBoolPref(blinkPref);
								prefs.setBoolPref(blinkPref, false);
								try {
									if("showNodeInTree" in viewer) // New DOM Inspector
										viewer.showNodeInTree(node);
									else
										viewer.selectElementInTree(node);
									return;
								}
								catch(e2) {
									Components.utils.reportError(e2);
								}
								finally {
									prefs.setBoolPref(blinkPref, blink);
								}
							}
						}
						catch(e) {
							Components.utils.reportError(e);
						}
						inspWin.setTimeout(inspect, tryDelay);
					}
					inspWin.addEventListener("load", function showNode(e) {
						inspWin.removeEventListener("load", showNode, false);
						inspect();
					}, false);
				};
			}
			return function(node, top) {
				w.inspectDOMNode(node);
			};
		}
		return null;
	});

	this.setAllListeners(ael);
	this.ww.registerNotification(this.evtHandlerGlobal);
	var btn = this.button;
	if(btn) {
		btn._context = context;
		btn.onDestroy = function(reason) {
			if(reason != "delete")
				return;
			_log('"Delete button" pressed -> stop()');
			this._context.stop();
		};
	}
	_log(
		"Successfully started!"
		+ "\nMode: " + (
			btn
				? "Custom Button"
				: "No Button"
		)
		+ ", highlighter: " + (
			_highlightUsingFlasher
				? "inIFlasher"
				: this.evtHandlerGlobal.noStyles
					? "inline CSS"
					: "nsIStyleSheetService"
		)
	);
}
function destroy() {
	var tt = this.tt;
	if(!tt || !tt.parentNode)
		return;
	tt.hidePopup();
	tt.parentNode.removeChild(tt);

	var ehg = this.evtHandlerGlobal;
	ehg.unwatchAttrs();
	ehg.unhl();
	ehg._noMouseoverTimer && ehg._noMouseoverTimer.cancel();
	if(!_highlightUsingFlasher) {
		var sss = this.sss;
		var cssURI = this.cssURI;
		if(sss.sheetRegistered(cssURI, sss.AGENT_SHEET))
			sss.unregisterSheet(cssURI, sss.AGENT_SHEET);
		if(sss.sheetRegistered(cssURI, sss.USER_SHEET))
			sss.unregisterSheet(cssURI, sss.USER_SHEET);
	}
	this.setAllListeners(rel);
	this.ww.unregisterNotification(ehg);
	var btn = this.button;
	if(btn) {
		delete btn._context;
		delete btn.onDestroy;
	}
	delete window[_ns];
	_log("Shutdown finished!");
}
//=== Attributes Inspector end
};

this.type = "menu";
this.orient = "horizontal";