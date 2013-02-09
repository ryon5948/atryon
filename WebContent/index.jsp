<!DOCTYPE html>

<html lang="en">
<title>Andrew R.</title>
<head>
<link rel="stylesheet" type="text/css" media="all" href="css/heydings.css">
<link href="css/tomcat.css" rel="stylesheet" type="text/css" />
<link rel="shortcut icon" href="images/ar.ico">
<link href="css/jquery-ui-1.8.23.custom.css" rel="stylesheet"
	type="text/css" media="all" />
<script type="text/javascript" src="js/jquery-1.8.0.min.js"></script>
<script type="text/javascript"
	src="js/development-bundle/ui/jquery-ui-1.8.23.custom.js"></script>
<script type="text/javascript" src="js/default.js"></script>
</head>

<body>
	<div id="navigation"></div>
	<div id="sideBar" class="shadow fontface">
		<a href="javascript:window.print()">p</a><hr>
		<a href="mailto:aryon@eden.rutgers.edu">E</a><hr>D<br/>
	</div>
	<div id="wrapper" class="shadow">
		<img src="images/aryonlogo.png" height="" width=""
			style="margin: 40px 0px 40px 0px">

		<table
			style="border-top: solid 1px #E6E6E6; border-collapse: collapse; width: 100%; height: 700px">
			<tr>
				<td
					style="width: 60%; border-right: solid 1px #E6E6E6; vertical-align: top">

					<table class="contentLinks">
						<tr id="contentRow">
							<td onclick="showCategory('experience',event)"
								style="background-color: #E6E6E6;">Experience</td>
							<td onclick="showCategory('education',event)">Education</td>
							<td onclick="showCategory('projects',event)">Projects</td>
							<td onclick="showCategory('courses',event)">Relevant Courses</td>
						</tr>
					</table> <br>
					<div id="experience" style="padding: 10px">
						<section class="contentTab">
							<b>SDE Intern </b><span class="shadow curved">May-August
								2012</span><br /> <i>Amazon Wireless</i><br />
							<br />
							<p>I built an internal web application from scratch that was
								designed to help expose cases of fraud on the Amazon Wireless
								platform team. Gained invaluable web development and agile/scrum
								methodology experience.</p>

							<b>Tier One LifeCycle Agent </b><span class="shadow curved">May-August
								2012</span><br /> <i>AT&T MIS</i><br />
							<br />
							<p>I worked to resolve customer's business related issues
								with their AT&T managed internet accounts as well as provide
								them with information about their circuits.</p>

						</section>
					</div>
					<div id="education" style="padding: 10px; display: none">
						<section class="contentTab">
							<b>A.A Liberal Arts </b><span class="shadow curved">2008-2010</span>
							<br /> Ocean County College<br /> TomsRiver, NJ 08754 <br />
							3.78 GPA, President's List <br /> <br /> <b>B.A Computer
								Science </b><span class="shadow curved">2011-Present</span> <br />
							Rutgers University, New Brunswick<br /> NJ 08901 Computer
							Science Major 3.7 GPA<br /> President's List, Academic Honor's
							Society
						</section>
					</div>
					<div id="projects" style="display: none; padding: 10px">
						<section class="contentTab">
							<b>Projects</b>
						</section>
					</div>
					<div id="courses" style="display: none; padding: 10px">
						<section class="contentTab">
							<b>Completed</b>
							<div class="classDescription shadow">Class descriptions</div>
							<ul id="courseList">
								<li onclick="showDescription(event)"
									data="The class is a tour of the big ideas that make computer science an
								academic discipline.  We tour the architecture of modern computers
								from bits and logic all the way up to programming languages and
								software libraries.  We probe the insights in computability and
								algorithm design that make possible massive search engines like Google
								and help us understand the relation between computation and
								intelligence.  Coursework primarily involves paper-and-pencil problem
								solving and a very small amount of programming to provide students
								with hands-on-experience with the concepts we introduce.">Great
									Insights to Computer Science</li>
								<li onclick="showDescription(event)"
									data="Intensive introduction to computer science. Problem solving through decomposition. Writing, debugging, and analyzing programs in Java. Algorithms for sorting and searching. Introduction to data structures, recursion.">Introduction
									to Computer Science</li>
								<li onclick="showDescription(event)"
									data="To investigate the essential properties of data structures and algorithms for operating on them; to use these structures as tools to assist algorithm design; to extend exposure to 
								searching, sorting and hashing techniques.">Data
									Structures</li>
								<li onclick="showDescription(event)"
									data="To introduce the student to the mathematical tools of logic and induction, and to the basic definitions and theorems concerning relations, functions, and sets.  Later courses in the computer science curriculum build on the mathematical foundations covered here. Particular emphasis is placed on inductive definitions and proofs, with application to problems in computer science.">Introduction
									to Discrete Structures I</li>
								<li onclick="showDescription(event)"
									data="Provides the background in combinatorics and probability theory required in design and 
								analysis of algorithms, in system analysis, and in other areas of computer science.">Introduction
									to Discrete Structures II</li>
								<li onclick="showDescription(event)"
									data="This course covers the fundamental issues in the design of modern computer systems, including the design and implementation of key hardware components such as the processor, memory, and I/O devices, and the software/hardware interface.">Computer
									Architecture</li>
								<li>Linear Optimization</li>
								<li onclick="showDescription(event)"
									data="To expose the student to the development, application, and analysis of basic numerical algorithms.">Numerical
									Analysis and Computing</li>
								<li>Calculus I & II</li>
								<li>Linear Algebra</li>
								<li>Introduction to Mathematical Reasoning</li>
							</ul>
							<b>In progress...</b>
							<ul id="courseList">
								<li onclick="showDescription(event)"
									data="To study a variety of useful algorithms and analyze their complexity; by that experience to gain insight into principles and data-structures useful in algorithm design.">Design
									and Algorithms</li>
								<li onclick="showDescription(event)"
									data="This course teaches students how to think about, build, debug, and test large computer programs.  The course stresses learning how to use tools such as debuggers, profilers, source version control systems, and integrated development environments as an essential part of developing large programs.  The course also stresses the understanding of how programs execute on today's computers and how to measure and optimize performance.  Programming will be in C on Unix systems to introduce students to a new programming eco system, as well as enable the mapping of high-level language constructs to the underlying machine.">Systems
									Programming</li>
								<li onclick="showDescription(event)"
									data="The course is aimed at making the student familiar with the general concepts common to all programming languages so as to facilitate learning new languages.  Language paradigms (i.e., logic, functional, procedural, object-oriented) are compared and implementation strategies are discussed.">Principles
									of Programming Languages</li>
								<li onclick="showDescription(event)"
									data="Describing and querying various forms of information such as structured data in relational databases, unstructured text (IR), semi-structured data (XML, web), deductive knowledge. Conceptual modeling and schema design. Basics of database management system services (transactions, reliability, security, optimization). Advanced topics: finding patterns in data, information mapping and integration. The course focuses on a user's perspective, rather than how one implements DBMS.">Principles
									of Information and Data Management</li>
							</ul>
						</section>
					</div>

				</td>
				<td style="vertical-align: top; padding: 10px">
					<table class="contentLinks"
						style="padding: 0px; width: 100%; display: table; text-align: right; font-weight: bold">
						<tr>
							<td onclick="window.open('https://www.facebook.com/andrew.ryon')">Facebook</td>
						</tr>
						<tr>
							<td
								onclick="window.open('http://www.linkedin.com/profile/edit?trk=hb_tab_pro_top')">LinkedIn</td>
						</tr>
						<tr>
							<td onclick="window.open('https://twitter.com/AndrewRyon1')">Twitter</td>
						</tr>
						<tr>
							<td
								onclick="window.open('https://plus.google.com/111671198863018009602/posts')">Google
								Plus</td>
						</tr>
					</table>
			</tr>
		</table>
	</div>
	<div id="footer" class="copyright">Created by Andrew Ryon 2012</div>
</body>
</html>
