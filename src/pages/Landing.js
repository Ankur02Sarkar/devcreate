import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
} from "@mui/material";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing">
      <div className="footer">
        <img className="rectangle-icon" alt="" src="../rectangle.svg" />
        <img className="decoration-icon" alt="" src="../decoration.svg" />
        <div className="mobile-store">
          <Button
            className="apple"
            sx={{ width: 236 }}
            variant="contained"
            color="primary"
          >
            Button
          </Button>
          <Button
            className="google"
            sx={{ width: 238 }}
            variant="contained"
            color="primary"
          >
            Button
          </Button>
        </div>
        <div className="defaultfootermenu">
          <div className="footer1">
            <div className="nam-posuere-accumsan">
              Nam posuere accumsan porta. Integer id orci sed ante tincidunt
              tincidunt sit amet sed libero.
            </div>
            <div className="skyrev-theme-2021">© Skyrev Theme 2021</div>
            <div className="sitemap">
              <b className="company">COMPANY</b>
              <div className="donec-dignissim-cura">
                <p className="donec-dignissim">Donec dignissim</p>
                <p className="donec-dignissim">&nbsp;</p>
                <p className="donec-dignissim">Curabitur egestas</p>
                <p className="donec-dignissim">&nbsp;</p>
                <p className="donec-dignissim">Nam posuere</p>
                <p className="donec-dignissim">&nbsp;</p>
                <p className="aenean-facilisis">Aenean facilisis</p>
              </div>
            </div>
            <div className="sitemap1">
              <b className="company">Services</b>
              <div className="donec-dignissim-cura">
                <p className="donec-dignissim">Cras convallis</p>
                <p className="donec-dignissim">&nbsp;</p>
                <p className="donec-dignissim">Vestibulum faucibus</p>
                <p className="donec-dignissim">&nbsp;</p>
                <p className="donec-dignissim">Quisque lacinia purus</p>
                <p className="donec-dignissim">&nbsp;</p>
                <p className="aenean-facilisis">Aliquam nec ex</p>
              </div>
            </div>
            <a className="logolandsacpe">
              <div className="group">
                <img
                  className="luxi-hosting-logo-icon"
                  alt=""
                  src="../luxihostinglogo@2x.png"
                />
                <div className="social">Social</div>
              </div>
            </a>
            <div className="sitemap-copy">
              <b className="company">resources</b>
              <div className="donec-dignissim-cura">
                <p className="donec-dignissim">Suspendisse porttitor</p>
                <p className="donec-dignissim">&nbsp;</p>
                <p className="donec-dignissim">Nam posuere</p>
                <p className="donec-dignissim">&nbsp;</p>
                <p className="aenean-facilisis">{`Curabitur egestas `}</p>
              </div>
            </div>
            <div className="socmed">
              <Button
                className="socmed-child"
                sx={{ width: 37.5 }}
                variant="contained"
                color="primary"
              >
                Button
              </Button>
              <Button
                className="group-9-copy"
                sx={{ width: 37.5 }}
                variant="contained"
                color="primary"
              >
                Button
              </Button>
              <Button
                className="group-9-copy-2"
                sx={{ width: 37.5 }}
                variant="contained"
                color="primary"
              >
                Button
              </Button>
              <Button
                className="group-9-copy-3"
                sx={{ width: 37.5 }}
                variant="contained"
                color="primary"
              >
                Button
              </Button>
            </div>
          </div>
          <FormControl
            className="lang-select"
            sx={{ width: 211 }}
            variant="filled"
          >
            <InputLabel color="primary">English - En</InputLabel>
            <Select color="primary" size="medium" label="English - En">
              <MenuItem value="Option 1">Option 1</MenuItem>
              <MenuItem value="Option 2">Option 2</MenuItem>
              <MenuItem value="Option 3">Option 3</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
        <div className="call-to-action">
          <b className="what-are-you-waiting">
            What are you waiting for? Download Now!
          </b>
        </div>
      </div>
      <div className="top-community">
        <img
          className="top-community-1"
          alt=""
          src="../top-community-1@2x.png"
        />
        <div className="how-to-edit">
          <div className="how-to-edit-child" />
          <div className="how-to-edit-item" />
          <a
            className="httpsllinklyhqcoml1caem"
            href="https://l.linklyhq.com/l/1CAeM"
            target="_blank"
          >
            https://l.linklyhq.com/l/1CAeM
          </a>
          <a
            className="for-full-editing-please-check"
            href="https://l.linklyhq.com/l/1CAeM"
            target="_blank"
          >
            For full editing please check link bellow
          </a>
        </div>
      </div>
      <div className="testimonial">
        <img className="image-2-icon" alt="" src="../image-2@2x.png" />
        <div className="how-to-edit1">
          <div className="how-to-edit-inner" />
          <div className="rectangle-div" />
          <a
            className="httpsllinklyhqcoml1caem1"
            href="https://l.linklyhq.com/l/1CAeM"
            target="_blank"
          >
            https://l.linklyhq.com/l/1CAeM
          </a>
          <a
            className="for-full-editing-please-check1"
            href="https://l.linklyhq.com/l/1CAeM"
            target="_blank"
          >
            For full editing please check link bellow
          </a>
        </div>
      </div>
      <div className="discover">
        <div className="decoration-preview-preview">
          <img className="mask-icon" alt="" src="../mask.svg" />
          <div className="slider">
            <img className="image-1-icon" alt="" src="../image-1@2x.png" />
            <div className="how-to-edit2">
              <div className="how-to-edit-inner" />
              <div className="rectangle-div" />
              <a
                className="httpsllinklyhqcoml1caem1"
                href="https://l.linklyhq.com/l/1CAeM"
                target="_blank"
              >
                https://l.linklyhq.com/l/1CAeM
              </a>
              <a
                className="for-full-editing-please-check1"
                href="https://l.linklyhq.com/l/1CAeM"
                target="_blank"
              >
                For full editing please check link bellow
              </a>
            </div>
          </div>
          <div className="titletitlecenteralign-dark">
            <div className="titlecenteralign">
              <b className="quisque-ut-metus">Discover</b>
              <div className="active-indicator" />
            </div>
          </div>
        </div>
      </div>
      <div className="counter">
        <div className="counter1">
          <div className="counter2">
            <b className="m">+200M</b>
            <img
              className="ios-cloud-download-outline-icon"
              alt=""
              src="../iosclouddownloadoutline.svg"
            />
            <div className="download">Download</div>
          </div>
        </div>
        <div className="counter3">
          <div className="counter4">
            <b className="m1">+480M</b>
            <div className="members">Members</div>
            <img
              className="ios-people-outline-icon"
              alt=""
              src="../iospeopleoutline.svg"
            />
          </div>
        </div>
        <div className="counter5">
          <div className="counter6">
            <b className="k">+18K</b>
            <img
              className="ios-paw-outline-icon"
              alt=""
              src="../iospawoutline.svg"
            />
            <div className="communities">Communities</div>
          </div>
        </div>
        <img className="counter-child" alt="" src="../line-2.svg" />
        <img className="counter-item" alt="" src="../line-2.svg" />
      </div>
      <div className="how-it-works">
        <div className="feature-3">
          <img className="artworks-icon" alt="" src="../artworks@2x.png" />
          <div className="titlesubtitle-aligncenter">
            <div className="vivamus-sit-amet-int">
              Vivamus sit amet interdum
            </div>
            <img className="oval-icon" alt="" src="../oval.svg" />
          </div>
          <div className="vestibulum-sit-amet">{`Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. `}</div>
        </div>
        <div className="feature-2">
          <div className="feature2">
            <img className="decoration-icon1" alt="" src="../decoration1.svg" />
            <div className="image">
              <div className="screenshoot">
                <img
                  className="rectangle-icon1"
                  alt=""
                  src="../rectangle1@2x.png"
                />
                <img className="image-icon" alt="" src="../image@2x.png" />
                <div className="pagination">
                  <div className="rectangle" />
                  <div className="rectangle1" />
                  <div className="rectangle2" />
                </div>
                <b className="lorem-ipsum-dolor-ut">
                  <p className="donec-dignissim">Lorem Ipsum Dolor</p>
                  <p className="aenean-facilisis">Ut sed eros finibus</p>
                </b>
                <img className="oval-icon1" alt="" src="../oval1@2x.png" />
                <div className="jena-doe-yesterday">
                  <p className="donec-dignissim">
                    <span className="jena-doe1">Jena Doe</span>
                  </p>
                  <p className="yesterday-720-am">
                    <span>Yesterday, 7:20 AM</span>
                  </p>
                </div>
              </div>
            </div>
            <img className="vector-icon" alt="" src="../vector@2x.png" />
          </div>
          <div className="text">
            <div className="titlesubtitle-alignleft">
              <div className="vivamus-sit-amet-int1">
                Vivamus sit amet interdum
              </div>
              <img className="oval-icon2" alt="" src="../oval2.svg" />
            </div>
            <div className="maecenas-nisl-libero">
              Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam
              vestibulum feugiat.
            </div>
          </div>
        </div>
        <div className="feature-1">
          <img className="feature1-icon" alt="" src="../feature1@2x.png" />
          <div className="text1">
            <div className="titlesubtitle-alignleft1">
              <div className="vivamus-sit-amet-int2">
                Vivamus sit amet interdum
              </div>
              <img className="oval-icon3" alt="" src="../oval3.svg" />
            </div>
            <div className="nam-sollicitudin-dig">
              Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate
              sed. Vestibulum sit amet tortor sit amet libero lobortis.
            </div>
          </div>
        </div>
        <div className="titletitlecenteralign">
          <div className="titlecenteralign">
            <b className="quisque-ut-metus1">Features</b>
            <div className="active-indicator" />
          </div>
        </div>
      </div>
      <div className="pagination1">
        <div className="item">
          <div className="business-solution">Business Solution</div>
          <img className="oval-icon4" alt="" src="../oval4.svg" />
          <div className="interdum-et-malesuad">
            Interdum et malesuada ac ante…
          </div>
        </div>
        <div className="item1">
          <div className="free-project-quote">Free project quote</div>
          <div className="interdum-et-malesuad1">
            Interdum et malesuada ac ante…
          </div>
        </div>
        <div className="item2">
          <div className="free-project-quote">Nulla lobortis nunc</div>
          <div className="interdum-et-malesuad2">
            Interdum et malesuada ac ante…
          </div>
        </div>
        <img className="line-icon" alt="" src="../line.svg" />
        <img className="line-icon1" alt="" src="../line.svg" />
      </div>
      <div className="banner">
        <img className="liquid-bg-icon" alt="" src="../liquid-bg.svg" />
        <img className="vector-icon1" alt="" src="../vector1@2x.png" />
        <div className="text2">
          <b className="sed-imperdiet-enim-l">
            Sed Imperdiet Enim li Vitae Viverra Justo
          </b>
          <div className="nam-sollicitud-nunc">
            Nam sollicitud nunc, cursus eros vulputate sed. Vestibulum lobortis.
          </div>
        </div>
        <div className="link-store">
          <Button
            className="apple"
            sx={{ width: 160 }}
            variant="contained"
            color="primary"
          >
            Button
          </Button>
          <Button
            className="google1"
            sx={{ width: 161.35203552246094 }}
            variant="contained"
            color="primary"
          >
            Button
          </Button>
        </div>
      </div>
      <div className="defaultheadermenu">
        <div className="header">
          <div className="feature-discover-sto">
            Feature Discover Stories Community Blog
          </div>
          <img className="oval-icon5" alt="" src="../oval5.svg" />
          <div className="option">
            <a className="login" href="/login">
              Login
            </a>
            <Button
              className="buttonflatprimary"
              sx={{ width: 114 }}
              variant="contained"
              color="primary"
            >
              SEE DETAIL
            </Button>
            <img className="line-icon2" alt="" src="../line2.svg" />
            <Button
              className="android-settings"
              sx={{ width: 29 }}
              variant="outlined"
              color="primary"
            >
              Button
            </Button>
          </div>
        </div>
        <a className="logolandsacpe1" href="/">
          <div className="group">
            <img
              className="luxi-hosting-logo-icon"
              alt=""
              src="../luxihostinglogo1@2x.png"
            />
            <div className="social1">Social</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Landing;
