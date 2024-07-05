import Link from 'next/link';
import styles from './posts.module.scss';
import IconWebpage from '@/icons/IconWebpage';
import IconGithub from '@/icons/IconGithub';
import Image from 'next/image';
import { getPosts } from '@/api/getPosts';
import { PostsProps } from '@/types/posts';
import IconCalendar from '@/icons/IconCalendarDates';

export default async function Posts() {
    const { objects } : PostsProps = await getPosts();

    return (
        <>
            {objects.map((post) => (
                <section className={styles.post} key={post.slug}>
                    <h1 className={styles.title}>{ post.title }</h1>
                    <h2 className={styles.subtitle}>{ post.metadata.subtitle }</h2>
                    <div className={styles.divItems}>
                        <IconWebpage /> 
                        <Link href={ post.metadata.linkdeploy } target="_blank">
                            <p>Implantação</p>
                        </Link>
                    </div>
                    <div className={styles.divItems}>
                        <IconGithub style={{width: '2.5rem', height: '2.5rem'}} /> 
                        <Link href={ post.metadata.linkgithub } target="_blank">
                            <p>Github</p>
                        </Link>
                    </div>
                    <div className={styles.divItems}>
                        <IconCalendar />
                        <p>{ post.metadata.date }</p>
                    </div>
                    <div className={styles.contentImage}>
                        <Image 
                            src={ post.metadata.image.url }
                            alt={ post.title }
                            fill={true}
                            priority={true}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className={styles.image}
                        />
                    </div>
                </section>
            ))}
        </>
    );
}