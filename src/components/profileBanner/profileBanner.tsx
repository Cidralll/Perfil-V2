import Image from 'next/image';
import styles from './profileBanner.module.scss';
import Link from 'next/link';
import IconGithub from '@/icons/IconGithub';
import IconLinkedin from '@/icons/IconLinkedin';
import { ProfileBannerProps } from '@/types/profileBanner';
import { getProfileBanner } from '@/api/getProfileBanner';

export default async function ProfileBanner() {
    const { object } : ProfileBannerProps = await getProfileBanner();

    return (
        <main className={styles.main}>
            <div className={styles.contentBanner}>
                <Image 
                    alt={'Banner'}
                    src={object.metadata.banner.url}
                    priority={true}
                    quality={100}
                    fill={true}
                    className={styles.banner}
                    sizes='(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 60vw'
                />
            </div>
            <section className={styles.contentProfile}>
                <div className={styles.divLeft}>
                    <div className={styles.contentPicture}>
                        <Image 
                            src={'/profile.jpg'}
                            alt={'Imagem de perfil'}
                            fill={true}
                            priority={true}
                            quality={100}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className={styles.picture}
                        />
                    </div>
                    <p>Lucas Cidral</p>
                    <div className={styles.line} />
                </div>
                <div className={styles.divRight}>
                    <div  className={styles.divInfo}>
                        {object.metadata.description.map((description, index) => (
                            <p className={styles.text} key={index}>{ description.item }</p>
                        ))}
                    </div>
                    <div className={styles.divIcons}>
                        <Link href={object.metadata.links[0].link} target="_blank"> <IconGithub /> </Link>
                        <Link href={object.metadata.links[1].link}> <IconLinkedin /> </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}