import { AiOutlineGithub,AiOutlineFacebook,AiOutlineTwitter,AiOutlineLinkedin } from "react-icons/ai"
export default function Footer() {
    return (
      <div className="footer">
        Contact Us:-
        <ol>
          <li><a href="/" title="Github"><AiOutlineGithub/></a></li>
          <li> <a href="/" title="Facebook"><AiOutlineFacebook/></a></li>
          <li> <a href="/" title="Twitter"><AiOutlineTwitter/></a></li>
          <li> <a href="/" title="Linkedin"><AiOutlineLinkedin/></a></li>
        </ol>
      </div>
    );
  }