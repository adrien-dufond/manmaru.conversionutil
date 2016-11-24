/**
	Utilities for converting units.
	Inspired from CASA Lib / AS 3.0 (v.03/11/08) - Aaron Clinger, David Nelson, David Bliss
	
	@author Adrien Dufond - manmaru, Inc.
	@src https://github.com/adrien-dufond/manmaru
	@version 0.1
	@since 24/11/2016
	
	Distributed under the terms of the MIT license.
	http://www.opensource.org/licenses/mit-license.html
*/

ConversionUtil = (function() {
	
	function ConversionUtil() {}
   
	/**
        Converts bits to bytes.
         
        @param bits: The number of bits. 
        @return Returns the number of bytes.
    */
    ConversionUtil.bitsToBytes = function(bits) {
    	return bits / 8;
    }

	/**
            Converts bits to kilobits.
             
            @param bits: The number of bits.
            @return Returns the number of kilobits.
        */
        ConversionUtil.bitsToKilobits = function(bits) {
            return bits / 1024;
        }
         
        /**
            Converts bits to kilobytes.
             
            @param bits: The number of bits. 
            @return Returns the number of kilobits.
        */
        ConversionUtil.bitsToKilobytes = function(bits) {
            return bits / 8192;
        }
         
        /**
            Converts bytes to bits.
             
            @param bytes: The number of bytes.
            @return Returns the number of bits.
        */
        ConversionUtil.bytesToBits = function(bytes) {
            return bytes * 8;
        }
         
        /**
            Converts bytes to kilobits.
             
            @param bytes: The number of bytes.
            @return Returns the number of kilobits.
        */
        ConversionUtil.bytesToKilobits = function(bytes) {
            return bytes / 128;
        }
         
        /**
            Converts bytes to kilobytes.
             
            @param bytes: The number of bytes.
            @return Returns the number of kilobytes.
        */
        ConversionUtil.bytesToKilobytes = function(bytes) {
            return bytes / 1024;
        }
         
        /**
            Converts kilobits to bits.
             
            @param kilobits: The number of kilobits.
            @return Returns the number of bits.
        */
        ConversionUtil.kilobitsToBits = function(kilobits) {
            return kilobits * 1024;
        }
         
        /**
            Converts kilobits to bytes.
             
            @param kilobits: The number of kilobits.
            @return Returns the number of bytes.
        */
        ConversionUtil.kilobitsToBytes = function(kilobits) {
            return kilobits * 128;
        }
             
        /**
            Converts kilobits to kilobytes.
             
            @param kilobytes: The number of kilobits.
            @return Returns the number of kilobytes.
        */
        ConversionUtil.kilobitsToKilobytes = function(kilobits) {
            return kilobits / 8;
        }
         
        /**
            Converts kilobytes to bits.
             
            @param kilobytes: The number of kilobytes.
            @return Returns the number of bits.
        */
        ConversionUtil.kilobytesToBits = function(kilobytes) {
            return kilobytes * 8192;
        }
         
        /**
            Converts kilobytes to bytes.
             
            @param kilobytes: The number of kilobytes.
            @return Returns the number of bytes.
        */
        ConversionUtil.kilobytesToBytes = function(kilobytes) {
            return kilobytes * 1024;
        }
         
        /**
            Converts kilobytes to kilobits.
             
            @param kilobytes: The number of kilobytes.
            @return Returns the number of kilobits.
        */
        ConversionUtil.kilobytesToKilobits = function(kilobytes) {
            return kilobytes * 8;
        }
         
        /**
            Converts milliseconds to seconds.
             
            @param milliseconds: The number of milliseconds.
            @return Returns the number of seconds.
        */
        ConversionUtil.millisecondsToSeconds = function(milliseconds) {
            return milliseconds / 1000;
        }
         
        /**
            Converts milliseconds to minutes.
             
            @param milliseconds: The number of milliseconds.
            @return Returns the number of minutes.
        */
        ConversionUtil.millisecondsToMinutes = function(milliseconds) {
            return ConversionUtil.secondsToMinutes(ConversionUtil.millisecondsToSeconds(milliseconds));
        }
         
        /**
            Converts milliseconds to hours.
             
            @param milliseconds: The number of milliseconds.
            @return Returns the number of hours.
        */
        ConversionUtil.millisecondsToHours = function(milliseconds) {
            return ConversionUtil.minutesToHours(ConversionUtil.millisecondsToMinutes(milliseconds));
        }
         
        /**
            Converts milliseconds to days.
             
            @param milliseconds: The number of milliseconds.
            @return Returns the number of days.
        */
        ConversionUtil.millisecondsToDays = function(milliseconds) {
            return ConversionUtil.hoursToDays(ConversionUtil.millisecondsToHours(milliseconds));
        }
         
        /**
            Converts seconds to milliseconds.
             
            @param seconds: The number of seconds.
            @return Returns the number of milliseconds.
        */
        ConversionUtil.secondsToMilliseconds = function(seconds) {
            return seconds * 1000;
        }
         
        /**
            Converts seconds to minutes.
             
            @param seconds: The number of seconds.
            @return Returns the number of minutes.
        */
        ConversionUtil.secondsToMinutes = function(seconds) {
            return seconds / 60;
        }
         
        /**
            Converts seconds to hours.
             
            @param seconds: The number of seconds.
            @return Returns the number of hours.
        */
        ConversionUtil.secondsToHours = function(seconds) {
            return ConversionUtil.minutesToHours(ConversionUtil.secondsToMinutes(seconds));
        }
         
        /**
            Converts seconds to days.
             
            @param seconds: The number of seconds.
            @return Returns the number of days.
        */
        ConversionUtil.secondsToDays = function(seconds) {
            return ConversionUtil.hoursToDays(ConversionUtil.secondsToHours(seconds));
        }
         
        /**
            Converts minutes to milliseconds.
             
            @param minutes: The number of minutes.
            @return Returns the number of milliseconds.
        */
        ConversionUtil.minutesToMilliseconds = function(minutes) {
            return ConversionUtil.secondsToMilliseconds(ConversionUtil.minutesToSeconds(minutes));
        }
         
        /**
            Converts minutes to seconds.
             
            @param minutes: The number of minutes.
            @return Returns the number of seconds.
        */
        ConversionUtil.minutesToSeconds = function(minutes) {
            return minutes * 60;
        }
         
        /**
            Converts minutes to hours.
             
            @param minutes: The number of minutes.
            @return Returns the number of hours.
        */
        ConversionUtil.minutesToHours = function(minutes) {
            return minutes / 60;
        }
         
        /**
            Converts minutes to days.
             
            @param minutes: The number of minutes.
            @return Returns the number of days.
        */
        ConversionUtil.minutesToDays = function(minutes) {
            return ConversionUtil.hoursToDays(ConversionUtil.minutesToHours(minutes));
        }
         
        /**
            Converts hours to milliseconds.
             
            @param hours: The number of hours.
            @return Returns the number of milliseconds.
        */
        ConversionUtil.hoursToMilliseconds = function(hours) {
            return ConversionUtil.secondsToMilliseconds(ConversionUtil.hoursToSeconds(hours));
        }
         
        /**
            Converts hours to seconds.
             
            @param hours: The number of hours.
            @return Returns the number of seconds.
        */
        ConversionUtil.hoursToSeconds = function(hours) {
            return ConversionUtil.minutesToSeconds(ConversionUtil.hoursToMinutes(hours));
        }
         
        /**
            Converts hours to minutes.
             
            @param hours: The number of hours.
            @return Returns the number of minutes.
        */
        ConversionUtil.hoursToMinutes = function(hours) {
            return hours * 60;
        }
         
        /**
            Converts hours to days.
             
            @param hours: The number of hours.
            @return Returns the number of days.
        */
        ConversionUtil.hoursToDays = function(hours) {
            return hours / 24;
        }
         
        /**
            Converts days to milliseconds.
             
            @param days: The number of days.
            @return Returns the number of milliseconds.
        */
        ConversionUtil.daysToMilliseconds = function(days) {
            return ConversionUtil.secondsToMilliseconds(ConversionUtil.daysToSeconds(days));
        }
         
        /**
            Converts days to seconds.
             
            @param days: The number of days.
            @return Returns the number of seconds.
        */
        ConversionUtil.daysToSeconds = function(days) {
            return ConversionUtil.minutesToSeconds(ConversionUtil.daysToMinutes(days));
        }
         
        /**
            Converts days to minutes.
             
            @param days: The number of days.
            @return Returns the number of minutes.
        */
        ConversionUtil.daysToMinutes = function(days) {
            return ConversionUtil.hoursToMinutes(ConversionUtil.daysToHours(days));
        }
        /**
            Converts days to hours.
             
            @param days: The number of days.
            @return Returns the number of hours.
        */
        ConversionUtil.daysToHours = function(days) {
            return days * 24;
        }
         
        /**
            Converts degrees to radians.
             
            @param degrees: The number of degrees.
            @return Returns the number of radians.
        */
        ConversionUtil.degreesToRadians = function(degrees) {
            return degrees * (Math.PI / 180);
        }
         
        /**
            Converts radians to degrees.
             
            @param radians: The number of radians.
            @return Returns the number of degrees.
        */
        ConversionUtil.radiansToDegrees = function(radians) {
            return radians * (180 / Math.PI);
        }
		
    return ConversionUtil;
    
})();
