import { fetchGenres, fetchMovies } from './api'; // you may add functionality to these functions, but please use them

import { Header, Movie } from './components';

import './styles.css'; // have a look at this file and feel free to use the classes

export default function App() {
  return (
    <div>
      <Header text="Now playing" icon />
      <div>
        <div>Showing 12 movies</div>
        <Movie
          title="Wonder Woman 1984"
          description="Wonder Woman comes into conflict with the Soviet Union during the
            Cold War in the 1980s and finds a formidable foe by the name of the
            Cheetah."
          rating="7"
          popularity="2407.318"
          />
        <Movie
          title="The Little Things"
          description="Deputy Sheriff Joe 'Deke' Deacon joins forces with Sgt. Jim Baxter
            to search for a serial killer who's terrorizing Los Angeles. As they
            track the culprit, Baxter is unaware that the investigation is
            dredging up echoes of Deke's past, uncovering disturbing secrets
            that could threaten more than his case."
          rating="6.4"
          popularity="2119.969"
        />
        <Movie
          title="急先锋"
          description="Covert security company Vanguard is the last hope of survival for an
            accountant after he is targeted by the world's deadliest mercenary
            organization."
          rating="6.6"
          popularity="1362.714"
        />
        <Movie
          title="Breach"
          description="A hardened mechanic must stay awake and maintain an interstellar ark
            fleeing the dying planet Earth with a few thousand lucky souls on
            board... the last of humanity. Unfortunately, humans are not the
            only passengers. A shapeshifting alien creature has taken residence,
            its only goal is to kill as many people as possible. The crew must
            think quickly to stop this menace before it destroys mankind."
          rating="4.7"
          popularity="1267.391"
        />
        <Movie
          title="Soul"
          description="Joe Gardner is a middle school teacher with a love for jazz music.
            After a successful gig at the Half Note Club, he suddenly gets into
            an accident that separates his soul from his body and is transported
            to the You Seminar, a center in which souls develop and gain
            passions before being transported to a newborn child. Joe must
            enlist help from the other souls-in-training, like 22, a soul who
            has spent eons in the You Seminar, in order to get back to Earth."
          rating="8.3"
          popularity="1175.056"
        />
        <Movie
          title="100% Wolf"
          description="Freddy Lupin, heir to a proud family line of werewolves, is in for a
            shock when on his 14th birthday his first 'warfing' goes awry,
            turning him into a ferocious poodle. The pack elders give Freddy
            until the next moonrise to prove he has the heart of a wolf, or risk
            being cast out forever. With the help of an unlikely ally in a
            streetwise stray named Batty, Freddy must prove he's 100% Wolf."
          rating="6.1"
          popularity="737.271"
        />
      </div>
    </div>
  );
}
