function CH3REMPI()

global T_n; T_n = 70  *0.69503 ;                 % Kelvin % rot temperature, MANUAL % converting from Kelvin to cm-1
global maxNpp; maxNpp = 5;                       % max number of basis %5 % for calcultingthe partition function for boltzmanns distribution
global Unknown_FoverE_var; Unknown_FoverE_var=0; % 0.1 % Ratio of Q-branch wrt other branches, unknwon variable
maxNpBasis=20;  %8 %20
maxNppBasis=20; %8 %20
sdTitle=[num2str(T_n/0.69503) 'Kelvin'];


sdBasis=GetBasis(maxNpBasis,maxNppBasis);        %[deltaN Np Npp K frequency intensity]

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



 
%% plotting
totalIntensity = sdBasis(:,7).*sdBasis(:,6);
expFrequency = sdBasis(:,5)/4;

figure;
subplot(2,1,1)
edges = 17460:0.5:17510;
h = weightedhistc(expFrequency, totalIntensity, edges);
plot(edges,h);
title(sdTitle);

subplot(2,1,2)
stem(expFrequency,totalIntensity); xlim([17460 17510]);

figure; axes; hold on;

ind = sdBasis(:,1) ==0 ; %Q-branch
stem(4*expFrequency(ind),totalIntensity(ind),'k','linewidth',3); 

ind = sdBasis(:,1) ==1 ; %R-branch
stem(4*expFrequency(ind),totalIntensity(ind),'r','linewidth',3); 

ind = sdBasis(:,1) ==2 ; %S-branch
stem(4*expFrequency(ind),totalIntensity(ind),'b','linewidth',3); 

%% testing
%{
ii=15              % T>20K and then Q18 starts to show up  
ind = sdBasis(:,1) ==0 & sdBasis(:,3)==ii;
stem(4*expFrequency(ind),totalIntensity(ind),'b','linewidth',3); 
%}
%%

xlim(4*[17460 17510]);
xlabel('two photon energy (cm^{-1})');
ylabel('intensity (au)');
title([num2str(T_n/0.69503) 'K' ]);
hl=legend({'Q-branch' 'R-branch' 'S-branch' });
 




end

function sdReturn=ApplySelectionRule(deltaN,K) %returns zero or one
% Two photon resonance enhanced multiphoton ionization
% spectroscopy and state assignments of the methyl radical
% Jeffrey W. Hudgens,a) T. G. DiGiuseppe,b) and M. C. Lin,1983
sdReturn=0; %default to forbidden

% following are allowed transistion
if K==0
    if(deltaN==0 || deltaN==2 || deltaN==-2)
        sdReturn=1;
    end
    
elseif K~=0
    if abs(deltaN)<=2
        sdReturn=1;
    end
    
end

end



function sdBasis=GetBasis(maxNpBasis,maxNppBasis)
sdBasis =[];
for Np=0:maxNpBasis
    for Npp=0:maxNppBasis
        for K=-Npp:Npp

            deltaN = Np-Npp;
            % sdBasis = [deltaN Np Npp K frequency population intensity energy]
            sdBasis = [sdBasis; [deltaN Np Npp K 0 0 0 0]]; % last two zeros are place holder for frequency and intensity
        end
    end
end
end


function sdReturn=GetFrequency(Np,Npp,K)
 % Rotational structure and predissociation dynamics of the methyl4p (v=O)
% Rydberg state investigated by resonance enhanced mUltlphotonio';ization
% spectroscopy
% John F. Black and Ivan Powis, 1988

%ground state
Bpp      = 9.57789;
Dpp_N    = 7.699e-4;
Dpp_NK   = -1.358e-4;
%excited state
Bp       = 9.90;
Dp_N     = 10.7e-4;
Dp_NK    = -21.2e-4;
%difference terms
mu0      = 69853.44 ; %cm-1
deltaC   = -8.8e-2;
deltaD_K = 0;

mu = mu0 + deltaC*K^2 - deltaD_K*K^4 ...
     + ( Bp *Np *(Np +1) - Bp *K^2 - Dp_N *Np ^2*(Np +1)^2 - Dp_NK *Np *(Np +1)*K^2 ) ...
     - ( Bpp*Npp*(Npp+1) - Bpp*K^2 - Dpp_N*Npp^2*(Npp+1)^2 - Dpp_NK*Npp*(Npp+1)*K^2 );
 
sdReturn = mu;
end


function [sdReturn1 sdReturn2]=GetPopulationNIntensity(Np,Npp,K)

%% 
% Photodissociation of dimethyl sulfide at 227.5 nm:
% resonance-enhanced multiphoton ionization of the methyl
% fragment
% B. Martｴ?nez-Haya 1, I. Zapater, P. Quintana, M. Meneｴndez, E. Verdasco,
% J. Santamarｴ?a, L. Ban和res, F.J. Aoiz, 1999
 

% Defining F,  global normalization factor
F = 1;

% Defining S, which is the N N ,K
% two-photon line-strength factors for each rotational
% transition

% See function sdReturn = S(Np,Npp,K) below
% global Unknown_FoverE_var; %Used in S
% disp(['Unknown_FoverE_var is taken to be ' num2str(Unknown_FoverE_var)]);

% Defining D(Np,K), which accounts for the loss in ioniza- N ,K
% tion efficiency due to predissociation of electronically
% excited CH3

deltaMu_h = 1.0; %cm-1
deltaMu_i = 0.12;
D=@(Np,K)  1 + deltaMu_i/deltaMu_h * (Np*(Np+1)-K^2);


% Defining P, Boltzmann distribution, 

global T_n;
global k_b; k_b= 1; % k_b is unity when temperature is in unit of cm-1
% global maxNpp;  %MANUAL
P=@(Npp,K) 1/Q  * G_K(Npp,K) * (2*Npp+1) * exp(-E(Npp,K)/(k_b*T_n)) ; % Q(T_n) is partition function

% disp(['maxNpp is taken to be ' num2str(maxNpp)]);
% disp(['T_n is taken to be ' num2str(T_n/0.69503) ' Kelvin']);

% intensity
I = F * S(Np,Npp,K)/(2*Npp+1) * 1/(D(Np,K)); %intensity
sdReturn1 = P(Npp,K);
sdReturn2 = I;

%testing
%{
stem(0,P(0,0)); hold on
stem(1,P(1,0),'b'); 
stem(1,P(1,1),'r'); 
stem(2,P(2,0),'b'); 
stem(2,P(2,1),'r'); 
stem(2,P(2,2),'m');
stem(3,P(3,0),'b'); 
stem(3,P(3,1),'r'); 
stem(3,P(3,2),'m'); 
stem(3,P(3,3),'k'); xlim([-0.2 3.2])
P(0,0)
P(1,0)
P(1,1)
P(2,0)
P(2,1)
P(2,1)
%}

end


%%%%%%%%%%%%%%%%%%%%%%%%%%%% functinons for P %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function sdReturn=Q() % for P
   global k_b;
   global maxNpp;
   global T_n;
   
   sdSum = 0;
   for Npp = 0:maxNpp
	   for K = -Npp:Npp
	   sdSum = sdSum + G_K(Npp,K) * (2*Npp+1) * exp(-E(Npp,K)/(k_b*T_n));
	   end
   end
   
sdReturn = sdSum;

end


function sdReturn=G_K(Npp,K) % for P
if (K==0)
    if (mod(Npp,2) == 0) % if even
		sdReturn=4;
    elseif (mod(Npp,2) == 1) % if odd
		sdReturn=0;
    else
        disp('error in sdAns=G_K(Npp,K)')
    end

elseif (mod(abs(K),3)==1)
    sdReturn=2;
elseif (mod(abs(K),3)==2)    
    sdReturn=2;
elseif (mod(abs(K),3)==0)
    sdReturn=4;    
else
    disp('error in sdAns=G_K(Npp,K) #2')
end

end

function sdReturn=E(Npp,K) % for P
 % Rotational structure and predissociation dynamics of the methyl4p (v=O)
% Rydberg state investigated by resonance enhanced mUltlphotonio';ization
% spectroscopy
% John F. Black and Ivan Powis, 1988

%ground state
Bpp      = 9.57789;
Dpp_N    = 7.699e-4;
Dpp_NK   = -1.358e-4;

sdReturn=Bpp*Npp*(Npp+1) - Bpp*K^2 - Dpp_N*Npp^2*(Npp+1)^2 - Dpp_NK*Npp*(Npp+1)*K^2;
 
end
%%%%%%%%%%%%%%%%%%%%%%%%%%% functions for P, END %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%




%%%%%%%%%%%%%%%%%%%%%%%%%%% functions for S %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function sdReturn = S(Np,Npp,K)
global Unknown_FoverE_var;

sdReturn=(2*Npp+1)*(2*Np+1)*(Wigner3j(Np,Npp,2,K,-K,0))^2;

    if (Np-Npp==0)
		sdReturn = Unknown_FoverE_var* 5*(2*Npp+1) + sdReturn; 
    end
    
end


%%%%%%%%%%%%%%%%%%%%%%%%%%% functions for S, END %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


