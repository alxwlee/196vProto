	function tooltipHtml(n, d){	/* function to create html content string in tooltip div. */
		return "<h4>"+n+"</h4><table>"+
			"<tr><td></td><td>"+"</td></tr>"+
			"<tr><td>Deaths in 2017:</td><td>    "+(d.high)+"</td></tr>"+
			"</table>";
	}
var lsz = 50;

var STATE = Array([lsz]);
var RATE = Array([lsz]);
var DEATHS = Array([lsz]);

STATE[0] = "AL";
RATE[0] = "16.6";
DEATHS[0] = "836";

STATE[1] = "AK";
RATE[1] = "27";
DEATHS[1] = "200";

STATE[2] = "AZ";
RATE[2] = "18.2";
DEATHS[2] = "1327";

STATE[3] = "AR";
RATE[3] = "20.8";
DEATHS[3] = "631";

STATE[4] = "CA";
RATE[4] = "10.5";
DEATHS[4] = "4312";

STATE[5] = "CO";
RATE[5] = "20.3";
DEATHS[5] = "1181";

STATE[6] = "CT";
RATE[6] = "10.5";
DEATHS[6] = "405";

STATE[7] = "DE";
RATE[7] = "11.6";
DEATHS[7] = "112";

STATE[8] = "FL";
RATE[8] = "14";
DEATHS[8] = "3227";

STATE[9] = "GA";
RATE[9] = "13.6";
DEATHS[9] = "1451";

STATE[10] = "HI";
RATE[10] = "15.2";
DEATHS[10] = "227";

STATE[11] = "ID";
RATE[11] = "23.2";
DEATHS[11] = "392";

STATE[12] = "IL";
RATE[12] = "11.2";
DEATHS[12] = "1474";

STATE[13] = "IN";
RATE[13] = "16.3";
DEATHS[13] = "1092";

STATE[14] = "IA";
RATE[14] = "15";
DEATHS[14] = "479";

STATE[15] = "KS";
RATE[15] = "19.1";
DEATHS[15] = "553";

STATE[16] = "KY";
RATE[16] = "16.9";
DEATHS[16] = "770";

STATE[17] = "LA";
RATE[17] = "15.2";
DEATHS[17] = "720";

STATE[18] = "ME";
RATE[18] = "18.9";
DEATHS[18] = "274";

STATE[19] = "MD";
RATE[19] = "9.8";
DEATHS[19] = "630";

STATE[20] = "MA";
RATE[20] = "9.5";
DEATHS[20] = "682";

STATE[21] = "MI";
RATE[21] = "14.1";
DEATHS[21] = "1457";

STATE[22] = "MN";
RATE[22] = "13.8";
DEATHS[22] = "783";

STATE[23] = "MS";
RATE[23] = "15";
DEATHS[23] = "445";

STATE[24] = "MO";
RATE[24] = "18.5";
DEATHS[24] = "1151";

STATE[25] = "MT";
RATE[25] = "28.9";
DEATHS[25] = "311";

STATE[26] = "NE";
RATE[26] = "14.7";
DEATHS[26] = "275";

STATE[27] = "NV";
RATE[27] = "20.3";
DEATHS[27] = "627";

STATE[28] = "NH";
RATE[28] = "18.9";
DEATHS[28] = "265";

STATE[29] = "NJ";
RATE[29] = "8.3";
DEATHS[29] = "795";

STATE[30] = "NM";
RATE[30] = "23.3";
DEATHS[30] = "491";

STATE[31] = "NY";
RATE[31] = "8.1";
DEATHS[31] = "1696";

STATE[32] = "NC";
RATE[32] = "14.3";
DEATHS[32] = "1521";

STATE[33] = "ND";
RATE[33] = "20.1";
DEATHS[33] = "154";

STATE[34] = "OH";
RATE[34] = "14.8";
DEATHS[34] = "1740";

STATE[35] = "OK";
RATE[35] = "19.1";
DEATHS[35] = "756";

STATE[36] = "OR";
RATE[36] = "19";
DEATHS[36] = "825";

STATE[37] = "PA";
RATE[37] = "15";
DEATHS[37] = "2030";

STATE[38] = "RI";
RATE[38] = "11.8";
DEATHS[38] = "129";

STATE[39] = "SC";
RATE[39] = "16.3";
DEATHS[39] = "838";

STATE[40] = "SD";
RATE[40] = "22.5";
DEATHS[40] = "191";

STATE[41] = "TN";
RATE[41] = "16.8";
DEATHS[41] = "1166";

STATE[42] = "TX";
RATE[42] = "13.4";
DEATHS[42] = "3778";

STATE[43] = "UT";
RATE[43] = "22.7";
DEATHS[43] = "663";

STATE[44] = "VT";
RATE[44] = "18.3";
DEATHS[44] = "112";

STATE[45] = "VA";
RATE[45] = "13.4";
DEATHS[45] = "1179";

STATE[46] = "WA";
RATE[46] = "16.9";
DEATHS[46] = "1297";

STATE[47] = "WV";
RATE[47] = "21.1";
DEATHS[47] = "393";

STATE[48] = "WI";
RATE[48] = "15.4";
DEATHS[48] = "926";

STATE[49] = "WY";
RATE[49] = "26.9";
DEATHS[49] = "157";



	//var count = 0;
	
	var sampleData ={STATE, RATE, DEATHS};	/* Sample random data. */	
	
	["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
	"ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH", 
	"MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT", 
	"CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN", 
	"WI", "MO", "AR", "OK", "KS", "LS", "VA"]
		.forEach(function(d){ 
			
			for (var count = 0; count < 50; count++){
				if (String(d) == String(STATE[count])){
					low=Math.round(10*RATE[count]);
					mid=RATE[count];
					high=DEATHS[count];
				}
			}
			
			sampleData[d]={low:d3.min([low]), high:d3.max([high]), 
					avg:d3.max([mid]), color:d3.interpolate("#e2e0ff", "#060068")(low/300)}; 
		});
	
	
	/* draw states on id #statesvg */	
	uStates.draw("#statesvg", sampleData, tooltipHtml);
	
	d3.select(self.frameElement).style("height", "600px"); 