<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body style="text-align: center;align-content: center; font-family: cursive;  ">
		
		<div id="HTMLtoPDF">
			<img style=" height: 80px; width: 113px; margin-top: 10px ; visibility: hidden;" src="iconyellow256h.png" />

	<div style="margin-top: 8mm; letter-spacing: 0.4mm;color:black; font-size: 1cm; display: inline-block; font-family: cursive ;  text-shadow:     
					0 0.1mm 0 hsl(174,15%,84%),
					0 0.2mm 0 hsl(174,5%,82%),
					0 0.3mm 0 hsl(174,5%,80%),
	                 0 0.4mm 0 hsl(174,5%,78%),
	                 0 0.5mm 0 hsl(174,5%,76%),
	                 0 0.6mm 0 hsl(174,5%,74%),
	                 0 0.7mm 0 hsl(174,5%,72%),
	
	                  0 0 0.5mm rgba(0,0,0,.2),
	                0 0.7mm 0.9mm rgba(0,0,0,.4),
	                0 1.1mm 1.3mm rgba(0,0,0,.6) "><b> Data Sheet </b></div>

<br>
<div>
		<table border="10" align="center"  width="550px"  style=" text-align: center;  border-color: black; border-width: 3px ; background-color: white"> 
			<tr style="height: 50px; background-color: yellow">
				<th>SL. NO.</th>
				<th>MATERIAL NAME</th>
				<th>QUANTITY (KG)</th>
			</tr>
			<tr>
				<td>1</td>
				<td>Cement Content</td>
				<td id="cc"><?php $a  = $_GET['cementCont']; echo $a; ?></td>
			</tr>
			<tr>
				<td>2</td>
				<td>Water</td>
				<td id="w"><?php $a=$_GET['corrQtyWater']; echo $a; ?></td>
			</tr>
			<tr>
				<td style="border-bottom: 0mm">3</td>
				<td>Fine Aggregate</td>
				<td id="fa" ><?php $a=$_GET['corrQtyFagg']; echo $a; ?></td>
			</tr>
			<tr >
				<td style="border-bottom: 0mm ; border-top: 0mm;"></td>
				<td>a) White Sand</td>
				<td id="aws"><?php $a=sprintf('%0.2f',$_GET['corrQtyFagg']*0.5); echo $a; ?></td>
			</tr>

			<tr>
				<td style=" border-top: 0mm;"></td>
				<td>b) Black Sand</td>
				<td id="bbs"><?php $a=sprintf('%0.2f',$_GET['corrQtyFagg']*0.5); echo $a; ?></td>
			</tr>
			<tr>
				<td style="border-bottom: 0mm">4</td>
				<td>Coarse Aggregate</td>
				<td id="ca"><?php $a=$_GET['corrQtyCagg']; echo $a; ?></td>
			</tr>
			<tr>
				<td style="border-bottom: 0mm ; border-top: 0mm;"></td>
				<td>a) Coarse Aggregate(20mm)</td>
				<td id="aca"><?php $a=sprintf('%0.2f',$_GET['corrQtyCagg']*0.6); echo $a; ?></td>
			</tr>
			<tr>
				<td style="border-bottom: 0mm ; border-top: 0mm;"></td>
				<td>b) Coarse Aggregate(10mm Grit)</td>
				<td id="bca"><?php $a=sprintf('%0.2f',$_GET['corrQtyCagg']*0.4); echo $a; ?></td>
			</tr>
			<tr>
				<td style=" border-top: 0mm;"></td>
				<td>Slum of Concrete</td>
				<td>50 - 100</td>
			</tr>
		</table>
</div>
		<br>

		<div><b>Mix Proportions By mass</b></div>
<br>
<div>
		<table border="10"  align="center" width="550px"  style=" border-width: 3px; text-align: center;  border-color: black; background-color: white"> 
			<tr style="height: 50px; background-color: yellow">
				<th>WATER</th>
				<th>CEMENT</th>
				<th>F.A.</th>
				<th>C.A.</th>
			</tr>
			<tr>
				<td><?php $a=$_GET['corrQtyWater']; echo $a; ?></td>
				<td><?php $a  = $_GET['cementCont']; echo $a; ?></td>
				<td><?php $a=$_GET['corrQtyFagg']; echo $a; ?></td>
				<td><?php $a=$_GET['corrQtyCagg']; echo $a; ?></td>
			</tr>
			<tr>
				<td><?php $a=$_GET['wcratio']; echo $a; ?></td>
				<td><?php $a  = $_GET['cementCont']; $b= $_GET['cementCont']; $c = sprintf('%0.2f',$a / $b); echo $c; ?></td>
				<td><?php $a=$_GET['corrQtyFagg']; $b= $_GET['cementCont']; $c = sprintf('%0.2f',$a / $b); echo $c; ?></td>
				<td><?php $a=$_GET['corrQtyCagg']; $b= $_GET['cementCont']; $c = sprintf('%0.2f',$a / $b); echo $c; ?></td>
			</tr>
		</table>
</div>
<br>

		<div><b>Quantities For 1 Bag of Cement</b></div>
<br>
<div>

		<table border="10"  align="center" width="550px"  style=" border-width: 3px; text-align: center;  border-color: black; background-color: white"> 
			<tr style="height: 50px; background-color: yellow">
				<th>WATER</th>
				<th>CEMENT</th>
				<th>F.A.</th>
				<th>C.A.</th>
			</tr>
			<tr>
				<td><?php $a=sprintf('%0.2f',$_GET['wcratio']*50); echo $a; ?></td>
				<td><?php $a=$_GET['cementCont']; $b= $_GET['cementCont']; $c = sprintf('%0.2f',($a / $b) * 50); echo $c; ?></td>
				<td><?php $a=$_GET['corrQtyFagg']; $b= $_GET['cementCont']; $c = sprintf('%0.2f',($a / $b) * 50); echo $c; ?></td>
				<td><?php $a=$_GET['corrQtyCagg']; $b= $_GET['cementCont']; $c = sprintf('%0.2f',($a / $b) * 50); echo $c; ?></td>
			</tr>
		</table>

</div>
<br>

		<div><b>Quantity for 9 Cube</b></div>
<br>
<div>
		<table border="10"  align="center" width="550px"  style=" border-width: 3px; text-align: center;  border-color: black;  background-color: white"> 
			<tr style="height: 50px; background-color: yellow">
				<th>WATER</th>
				<th>CEMENT</th>
				<th>F.A.</th>
				<th>C.A.</th>
			</tr>
			<tr>
				<td><?php $a=sprintf('%0.2f',($_GET['wcratio']*50)/3); echo $a; ?></td>
				<td><?php $a=$_GET['cementCont']; $b= $_GET['cementCont']; $c = sprintf('%0.2f',(($a / $b) * 50)/3); echo $c; ?></td>
				<td><?php $a=$_GET['corrQtyFagg']; $b= $_GET['cementCont']; $c = sprintf('%0.2f',(($a / $b) * 50)/3); echo $c; ?></td>
				<td><?php $a=$_GET['corrQtyCagg']; $b= $_GET['cementCont']; $c = sprintf('%0.2f',(($a / $b) * 50)/3); echo $c; ?></td>
			</tr>
		</table>
		<div style="visibility: hidden;">* F.A. - Fine Aggregate<br>
			&nbsp&nbsp&nbspC.A. - Coarse Aggregate</div>
</div>
<div style="visibility: hidden;">** F.A. - Fine Aggregate<br>
			&nbsp&nbsp&nbspC.A. - Coarse Aggregate</div>
</div>

<button id="cmd" style="display: inline-table; margin-right:  5%; width: 3cm; height: 1cm;" onclick="HTMLtoPDF()">Download PDF</button>

		<input style="display: inline-table; margin-left: 5%; width: 3cm; height: 1cm;" type="button" value="Refresh" onclick="activit2()" name="" > <br><br>

<!--
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

		<div>Design Grade : 
		<input id="dg"  type="number" onchange="fetchData()" name="DesignGrade"></div><br>

		<div style="padding-left: 60px;" id="tms" >TMS = </div><br>

		<div style="padding-left: 60px;" id="wc" onchange="">W/C = </div><br>

		<div>Max. size of Aggregate : 
		<input id="maxaggr" type="number" onchange="wContsCont()" name="MaxSizeOfAggr" ></div><br>

		<div style="padding-left: 60px;" id="wcont" >Water Content = </div><br>

		<div style="padding-left: 60px;" id="scont" onchange="">Sand Content = </div><br>

		<div>Fineness Modulus : 
		<input id="fmod" type="number" step="0.1" onchange="" name="FinenessModulus" ></div><br>

		<div>Sand Confirming Zone : 
		<input id="szone" type="number" onchange="sandCorr()" name="sandZone" ></div><br>

		<div style="padding-left: 60px;" id="corrWcont" >Correction in water content = </div><br>

		<div style="padding-left: 60px;" id="corrScont" >Correction in sand content = </div><br>

		<div style="padding-left: 60px;" id="cementCont" >Cement content = </div><br>


		<div>Specific Gravity of Cement : 
		<input id="sGravCem" type="number" step="0.01" onchange="speGravCm()" ></div><br>

		<div>Specific Gravity : </div>
		<div style="padding-left: 60px;">
			(i) Fine Aggregate : <input id="sGravf" type="number" step="0.01" onchange="sgravfm()"  ><br>
			(ii)Coarse Aggregate : <input id="sGravc" type="number" step="0.01" onchange="sgravcm()" ></div><br>

	
		<div>Moisture Content(%) : </div>
		<div style="padding-left: 60px;">
			(i) Fine Aggregate : <input id="mContf" type="number" step="0.01" onchange="mcontfm()" ><br>
			(ii)Coarse Aggregate : <input id="mContc" type="number" step="0.01" onchange="mcontcm()" ></div><br>

		<div>Water Absorption(%) : </div>
		<div style="padding-left: 60px;">
			(i) Fine Aggregate : <input id="wAbsf" type="number" step="0.01" onchange="wAbsfm()" ><br>
			(ii)Coarse Aggregate : <input id="wAbsc" type="number" step="0.01" onchange="wAbscm()" ></div><br>

		<div>Estimated Air Contain(%) =  <b> 1</b></div><br>

		<div>Volume of Concrete(m^3) =  <b>1</b></div><br>

		<div id="qtyFagg">Quantity of Fine Aggregate = </div><br>

		<div id="qtyCagg">Quantity of Coarse Aggregate = </div><br>

		<div id="corrQtyFagg">Correction in Qty. of Fine Aggregate = </div><br>

		<div id="corrQtyCagg">Correction in Qty. of coarse Aggregate = </div><br>

		<div id="corrQtyWater">Correction in Qty. of Water = </div><br>
	

$(window).on('load', function() {
var doc = new jsPDF();
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};
$('#pdfview').click(function () {
    doc.fromHTML($('#pdfdiv').html(), 15, 15, {
        'width': 700,
            'elementHandlers': specialElementHandlers
    });
    doc.save('file.pdf');
});
});

-->


	<script src="js/jspdf.js"></script>
	<script src="js/jquery-2.1.3.js"></script>
	<script src="js/pdfFromHTML.js"></script>
    <script src="Calculation.js"></script>
</body>
</html>