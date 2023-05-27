import { AiOutlineGithub,AiOutlineFacebook,AiOutlineTwitter,AiOutlineLinkedin } from "react-icons/ai"
export default function Footer() {
    return (
      <div className="footer">
        Contact Us:-
        <ol>
          <li><a href="https://github.com/debashis99374?tab=repositories" title="Github"  target="_blank"><AiOutlineGithub/></a></li>
          <li> <a href="https://www.facebook.com/debashis.kar.391" title="Facebook" target="_blank"><AiOutlineFacebook/></a></li>
          <li> <a href="https://twitter.com/Debasis31779035" title="Twitter" target="_blank"><AiOutlineTwitter/></a></li>
          <li> <a href="https://www.linkedin.com/in/debashis-kar/" title="Linkedin" target="_blank"><AiOutlineLinkedin/></a></li>
        </ol>
      </div>
    );
  }