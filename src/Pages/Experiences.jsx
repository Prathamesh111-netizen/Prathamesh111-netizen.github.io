import React from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import StarIcon from "@mui/icons-material/Star";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function ExperiencesPage() {
	return (
		<VerticalTimeline>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
				contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
				date="Present"
				iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
				icon={<FavoriteIcon />}
			>
				<h3 className="vertical-timeline-element-title">Exploring</h3>
				<h4 className="vertical-timeline-element-subtitle">Mumbai, India</h4>
				<p>Doing things I enjoy the most</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				date="May 2022 - Present"
				iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
				icon={<WorkIcon />}
			>
				<h3 className="vertical-timeline-element-title">SDE Intern</h3>
				<h4 className="vertical-timeline-element-subtitle">
					Sarvm.AI (Bengaluru, India)
				</h4>
				<p>Backend Development, REST API Services, AWS Tools</p>
				<p>Logs Processing, Microservice Architecture, System Design</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				date="Nov 2021 - June 2022"
				iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
				icon={<WorkIcon />}
			>
				<h3 className="vertical-timeline-element-title">
					Full Stack Developer
				</h3>
				<h4 className="vertical-timeline-element-subtitle">
					Vidyadaan Sahayyak Mandal (Thane, India)
				</h4>
				<p>User Experience, Records Management, Deployment</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--education"
				date="February 2021 - July 2024(Projected)"
				iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
				icon={<SchoolIcon />}
			>
				<h3 className="vertical-timeline-element-title">
					Bachelor of Technology in Information Technology
				</h3>
				<h4 className="vertical-timeline-element-subtitle">
					Sardar Patel Institute of Technology, Mumbai
				</h4>
				<p>CGPA : 8.78</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--education"
				date="2018 - 2020"
				iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
				icon={<SchoolIcon />}
			>
				<h3 className="vertical-timeline-element-title">
					HSC (Class 12th Exam)
				</h3>
				<p>Top 5 in College : 90.46%</p>
				<p>Mathematics : 99/100</p>
				<p>Physics : 97/100, Chemistry : 94/100</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--education"
				date="2006 - 2018"
				iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
				icon={<SchoolIcon />}
			>
				<h3 className="vertical-timeline-element-title">
					SSC (Class 10th Exam)
				</h3>
				{/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
				<p>School Topper : 96.80%</p>
				<p>NTSE: Mumbai Rank 7 (National Level)</p>
				<p>NMMS: Mumbai Rank 1 (National Level)</p>
				<p>Scholarship (7th standard): 240/300</p>
				<p>Scholarship (4th standard): 292/300</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
				icon={<StarIcon />}
			/>
		</VerticalTimeline>
	);
}
