import { Helmet } from 'react-helmet';
import config from '../config';

const Seo = () => {
    return (
        <Helmet>
            <title>Home | {config.github.username}</title>
            <link rel="icon" type="image/x-icon" href="/favicon.png" />

            <meta name='robots' content='index, follow'/>
            <meta name='googlebot' content='index,follow'/>

            <meta name="description" content="Selam ・ Altyapı Stoklarımız dolu" />

            <meta property='og:url' content='https://spidey.xyz' />
            <meta property='og:type' content='website'/>
            <meta property="og:title" content={`${config.github.username} | Full-Stack Developer`} />
            <meta name="og:description" content="Selam ・ Altyapı Stoklarımız dolu" />

            <meta property="og:image" content="/favicon.png" />
            <meta property="og:image:alt" content="spidey.xyz" />
            <meta property="og:locale" content="en_GB" />
            <meta name="theme-color" content="#00afe8" />
        </Helmet>
    );
}

export default Seo;
