export default { data: [  // should be api call
    {
      id: "1",
      title: "Molecular Dynamics simulation",
      thumb_url: "/images/projects/science/thumb/particle-simul-flow-chart.png",
      html_body: `
        <br>
        <p> Molecular Dynamics simulation of particles in a Zeeman Decelerator</p>
         Particles with magnetic moment flies through free space, and its trajectory is affected by time-varying magnetic field. The simulation is used to calculate parameters that need to be set in the experiments. The simulation plays a central role in the analysis of experimental data.
         <br>
         (Technologies used: RK4, MATLAB, MATLAB parallel computing toolbox, WestGrid, Poisson Superfish, COMSOL) <br> <br>

         <hr width="100%" style="margin: 5px 0;">
          <p>Flowchart:</p>
          <img src="/images/projects/science/particle-simul-flow-chart.png" width="70%" alt="" class="well"> <br>
         <hr width="100%" style="margin: 5px 0;">
          <p>Simulation results:</p>
          <img src="/images/projects/science/lfs_hfs.png" width="70%" alt="" class="well"> <br>
          <p>More info available upon request</p>
      `
    },

    {
      id: "2",
      title: "Control panel",
      thumb_url: "/images/projects/science/thumb/sdScope_Labview_frontend.png",
      html_body: `
        <br>
          <p> Labview control panel for physics experiment</p>
          The control panel sets experimental parameters, monitors errors occuring during the run of the experiment, and write analysis-ready pre-processed data directly to the hard drive. The control panels handles user generated events.
         <br>
         (Technologies used: LabView, AlazarTech PC-scope drivers) <br>
         (Design patterns: state machines, master-slave) <br> <br>

         <hr width="100%" style="margin: 5px 0;">
          <p>Front-end:</p>
          <img src="/images/projects/science/sdScope_Labview_frontend.png" width="70%" alt="" class="well"> <br>
         <hr width="100%" style="margin: 5px 0;">
          <p>Back-end:</p>
          <img src="/images/projects/science/sdScope_Labview_backend.png" width="70%" alt="" class="well"> <br>
          <p>More info available upon request</p>
      `
    },

    {
      id: "3",
      title: "AMO caculations",
      thumb_url: "/images/projects/science/thumb/ch3-rempi-fig.png",
      html_body: `
        <br>
        <p> REMPI spectra calculation </p>
         REMPI (Resonance Enhanced Multi-Photon Ionization) calculation uses transition intensities and transition frequencies from literature. Final simulation of experimental data is obtained by combining this REMPI calcultion with the result of the Molecular Dynamics simulation.
         <br>
         (Physics used: adv quantum mechanics, angular momemtum theory, molecular symmetry) <br> <br>

         <hr width="100%" style="margin: 5px 0;">
          <p>Starting with this equation ... :</p>
          <img src="/images/projects/science/ch3-rempi-eqn.png" width="70%" alt="" class="well"> <br>
          <p>... converting physics model to calculations in MATLAB ... :</p>

          <pre><code>function CH3REMPI()

              global T_n; T_n = 70  *0.69503 ; % Kelvin % rot temperature
              global maxNpp; maxNpp = 5; % max number of basis %5
              global Unknown_FoverE_var; Unknown_FoverE_var=0;
              maxNpBasis=20;  %8 %20
              maxNppBasis=20; %8 %20
              sdTitle=[num2str(T_n/0.69503) 'Kelvin'];


              sdBasis=GetBasis(maxNpBasis,maxNppBasis); %[deltaN Np Npp K frequency intensity]

              % Update sdBasis with freq and intensirt values
              for i=1:size(sdBasis,1) % for each row
                  deltaN=sdBasis(i,1);
                  Np = sdBasis(i,2);
                  Npp= sdBasis(i,3);
                  K  = sdBasis(i,4);

                  frequency   = GetFrequency(Np,Npp,K);
                  [population intensity]   = GetPopulationNIntensity(Np,Npp,K);
                  energy   = E(Npp,K);
              %     intensity=ApplySelectionRule(deltaN,K)*intensity;

                  sdBasis(i,5) = frequency;
                  sdBasis(i,6) = population;
                  sdBasis(i,7) = intensity;
                  sdBasis(i,8) = energy;
              end
          ....
          ....
          ....
          </code> </pre>

        <br>
          <p>... to get meaningful results/graphs:</p>
          <img src="/images/projects/science/ch3-rempi-fig.png" width="70%" alt="" class="well"> <br>

          <p>More info available upon request</p>
      `
    },

    {
      id: "4",
      title: "Magnetic field simulation",
      thumb_url: "/images/projects/science/thumb/coil_simul.png",
      html_body: `
        <br>
          <p> Magnetic field simulations of 3D geometries/components from the experiment </p>
          The simulation was able to be reduced into 2D cylindrical symmetry, which simplified the problem and shortened the running time. Field simulations influenced the next generation design of the experiment.
         <br>
         (Technologies used: Poisson Superfish, MATLAB, COMSOL) <br><br>

         <hr width="70%" style="margin: 5px 0;">
          <p>Induced magnet (shielded):</p>
          <img src="/images/projects/science/coil_simul.png" width="50%" alt="" class="well"> <br>
         <hr width="70%" style="margin: 5px 0;">
          <p>Hexapole magnetic guide:</p>
          <img src="/images/projects/science/magnetic_guide.png" width="50%" alt="" class="well"> <br>
          <p>More info available upon request</p>
      `
    },

    {
      id: "5",
      title: "PhD Thesis",
      thumb_url: "/images/projects/science/thumb/thesis.png",
      html_body: `
        <br>
        <p> Title: </p>
         <h2>Zeeman Deceleration of Methyl Radical</h2>

         <hr width="100%" style="margin: 5px 0;">
        <p> Abstract: </p>
        Conventional Zeeman decelerator, consisting of 80 stages, was constructed and tested. The experimental setup was characterized using O₂ as the reference molecule. Known results of deceleration of O₂ were reproduced. As an extension, detailed REMPI analysis of deceleration of O₂ was carried out, this REMPI analysis was conducted in parallel with ref [1]. Numerical simulation was successful in reproducing the TOF and REMPI spectra of deceleration of O₂. <br>

         The extension of using Zeeman decelerator to decelerate a polyatomic radical, CH₃, was successful: from initial velocity of 480m/s to a final velocity of 368m/s, corresponding to a removal of 41.2% of the initial translational energy. The decelerator’s efficiency at final velocity of 368m/s is around ~10%. The limiting factor of further deceleration is the signal to noise ratio. Hence, optimization of DC discharge conditions of CH₃ were attempted, but the attempt was with limited success.

       <br>
       <br>

         <a href="https://circle.ubc.ca/handle/2429/46692">
           <button type="button" class="btn btn-info"> <span class="glyphicon glyphicon-link" aria-hidden="true"></span> Link to thesis</button>
         </a>
      `
    },

    {
      id: "6",
      title: "Publications",
      thumb_url: "/images/projects/science/thumb/publications.png",
      html_body: `
        <br>
        <p> Publications: </p>
        <hr width="33%" style="margin: 5px 0;">

        <b>One-dimensional confinement of magnetically decelerated supersonic beams of O2 molecules</b> <br>
        We have demonstrated that supersonic beams of oxygen molecules (O2) in the ground rotational state were slowed to a near standstill by a linear Zeeman decelerator and successfully confined spatially in an anti-Helmholtz magnetic trap. The translational temperature of the decelerated O2 molecules was about 800 mK. The demonstrated trapping capability of paramagnetic species opens up various possibilities for the investigation of cold collisions and reactions of various radicals in the sub-kelvin regime by spatially confining them in a magnetic trap.
        <br>
        <a href="http://journals.aps.org/pra/abstract/10.1103/PhysRevA.91.021403">
          <button type="button" class="btn btn-info"> <span class="glyphicon glyphicon-link" aria-hidden="true"></span> Link to paper</button>
        </a>

        <hr width="33%" style="margin: 5px 0;">

        <b>Manipulation of translational motion of methyl radicals by pulsed magnetic fields</b> <br>
        Control of the translational motion of methyl radicals is demonstrated by using pulsed magnetic fields created by a series of solenoid coils. By synchronously switching the magnetic fields corresponding to the motion of the radicals, we have observed the deceleration and focusing of a supersonic radical beam. The present result shows that Zeeman deceleration of polyatomic free radicals in the doublet state can be realized. This opens possibilities for trapping cold polyatomic free radicals in a spatially confined area leading to further studies of cold collisions and reactions.
        <br>
        <a href="http://pubs.rsc.org/en/content/articlelanding/2013/cp/c2cp43796a">
          <button type="button" class="btn btn-info"> <span class="glyphicon glyphicon-link" aria-hidden="true"></span> Link to paper</button>
        </a>
      `
    }
  ]
}
